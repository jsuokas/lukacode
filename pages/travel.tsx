import Link from "next/link";
import { lukatravelsAPI } from "../utils/request";
import Header from "../components/lukatravels/header";
import { motion } from "framer-motion";
import css from "../css/pages/travel.css";
import Head from "next/head";
import { GetServerSideProps } from "next";

const opacityMotionProps = {
  initial: "hidden",
  animate: "enter",
  exit: "exit",
  variants: {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  },
  transition: { duration: 1 },
};

const linkMotionVariants = {
  initial: { y: 0, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

function Travel({ stories }) {
  return (
    <div className={css.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <Header />
      <motion.div className={css.storyLinks} {...opacityMotionProps}>
        {stories.map((story, idx) => (
          <Link key={idx} href="/travel/[id]" as={`/travel/${story.id}`}>
            <motion.a className={css.storyLink} variants={linkMotionVariants}>
              <img
                className={css.storyThumbnail}
                src={story.thumbnail.url}
                alt={story.thumbnail.fileName}
              />
              <div className={css.storyTitle}>{story.title}</div>
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const stories = await lukatravelsAPI.fetchStories();

  return { props: { stories } };
};

export default Travel;
