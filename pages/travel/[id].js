import { lukatravelsAPI } from "../../utils/request";
import Header from "../../components/lukatravels/header";
import { motion } from "framer-motion";
import css from "../../css/pages/story.css";

const motionProps = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: { duration: 1 },
};

function Story({ story }) {
  return (
    <div className={css.container}>
      <Header />
      {story ? (
        <>
          <motion.div
            className={css.storyThumbnail}
            style={{ backgroundImage: `url("${story.thumbnail.url}")` }}
            {...motionProps}
          >
            <div className={css.storyTitle}>
              <h1>{story.title}</h1>
              <div className={css.storyTime}>{story.time}</div>
            </div>
          </motion.div>
          Täältä sitten alkaisi seuraava teksti.
        </>
      ) : (
        <div>Not found</div>
      )}
    </div>
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
