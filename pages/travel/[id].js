import { lukatravelsAPI } from "../../utils/request";
import Header from "../../components/lukatravels/header";
import { motion } from "framer-motion";
import css from "../../css/pages/story.css";
const ReactMarkdown = require("react-markdown");

function Story({ story }) {
  return (
    <motion.div
      className={css.container}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Header />
      {story ? (
        <>
          <motion.div
            className={css.storyThumbnail}
            style={{ backgroundImage: `url("${story.thumbnail.url}")` }}
            variants={{
              initial: { scale: 0.96, y: 30, opacity: 0 },
              enter: {
                scale: 1,
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
              },
              exit: {
                scale: 0.6,
                y: 100,
                opacity: 0,
                transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
              },
            }}
          >
            <div className={css.storyTitle}>
              <h1>{story.title}</h1>
              <div className={css.storyTime}>{story.time}</div>
            </div>
          </motion.div>
          <ReactMarkdown source={story.content.markdown} />
        </>
      ) : (
        <div>Not found</div>
      )}
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
