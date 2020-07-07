import { useState, useEffect } from "react";
import { lukatravelsAPI } from "../../utils/request";
import Header from "../../components/lukatravels/header";
import { motion } from "framer-motion";
import css from "../../css/pages/story.css";
const ReactMarkdown = require("react-markdown");
import Head from "next/head";

function Story({ story }) {
  useEffect(() => {
    if (story.locations) {
      const center = story.locations[1];
      const L = require("leaflet");
      const mymap = L.map("mapid").setView(
        [center.latitude, center.longitude],
        5
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mymap);

      story.locations.forEach((point) => {
        L.marker([point.latitude, point.longitude]).addTo(mymap);
      });
    }
  }, []);

  return (
    <motion.div
      className={css.container}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin=""
        />
      </Head>
      <Header />
      {story ? (
        <motion.div
          {...{
            initial: "hidden",
            animate: "enter",
            exit: "exit",
            variants: {
              hidden: { opacity: 0 },
              enter: { opacity: 1 },
            },
            transition: { duration: 1 },
          }}
        >
          <div
            className={css.storyThumbnail}
            style={{ backgroundImage: `url("${story.thumbnail.url}")` }}
          >
            <div className={css.storyTitle}>
              <h1>{story.title}</h1>
              <div className={css.storyTime}>{story.time}</div>
            </div>
          </div>
          <div className={css.storyBody}>
            <ReactMarkdown source={story.content.markdown} />
            {story.youtubeUrl && (
              <iframe
                width="100%"
                height="400"
                src={story.youtubeUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </motion.div>
      ) : (
        <div>Not found</div>
      )}
      {story.locations && <div id="mapid" className={css.storyMap}></div>}
    </motion.div>
  );
}

export async function getStaticPaths() {
  const stories = await lukatravelsAPI.fetchStories();
  const paths = stories.map(({ id }) => ({ params: { id } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const stories = await lukatravelsAPI.fetchStories();
  return {
    props: {
      story: stories.find((it) => it.id === params.id),
    },
  };
}

export default Story;
