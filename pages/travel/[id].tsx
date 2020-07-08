import { useEffect } from "react";
import { lukatravelsAPI, Story } from "../../utils/request";
import Header from "../../components/lukatravels/header";
import { motion } from "framer-motion";
import css from "../../css/pages/story.css";
const ReactMarkdown = require("react-markdown");
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

function TravelStory({ story }) {
  useEffect(() => {
    if (story.locations) {
      const L = require("leaflet");
      const averageLatitude =
        story.locations.reduce((current, next) => current + next.latitude, 0) /
        story.locations.length;
      const averageLongitude =
        story.locations.reduce((current, next) => current + next.longitude, 0) /
        story.locations.length;
      const locationsMap = L.map("locationMap").setView(
        [averageLatitude, averageLongitude],
        6
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(locationsMap);

      const markers = story.locations.map((point) =>
        L.marker([point.latitude, point.longitude])
      );

      markers.forEach((marker) => {
        marker.addTo(locationsMap);
      });

      const markerGroup = new L.featureGroup(markers);
      locationsMap.fitBounds(markerGroup.getBounds());
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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="robots" content="noindex" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
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
              <p>
                <iframe
                  width="100%"
                  height="400"
                  src={story.youtubeUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </p>
            )}
          </div>
        </motion.div>
      ) : (
        <div>Not found</div>
      )}
      {story.locations && <div id="locationMap" className={css.storyMap}></div>}
    </motion.div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stories = await lukatravelsAPI.fetchStories();
  const paths = stories.map(({ id }) => ({ params: { id } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stories = await lukatravelsAPI.fetchStories();
  return {
    props: {
      story: stories.find((it) => it.id === params.id),
    },
  };
};

export default TravelStory;
