import Link from "next/link";
import { lukatravelsAPI } from "../utils/request";
import Header from "../components/lukatravels/header";
import { motion } from "framer-motion";
import css from "../css/pages/travel.css";

const motionProps = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: { duration: 1 },
};

function Travel({ stories }) {
  return (
    <div className="container">
      <Header />
      <motion.div className={css.storyLinks} {...motionProps}>
        {stories.map((story, idx) => (
          <Link
            key={idx}
            href="/travel/[id]"
            as={`/travel/${story.id}`}
            prefetch
          >
            <a className={css.storyLink}>
              <img
                className={css.storyThumbnail}
                src={story.thumbnail.url}
                alt={story.thumbnail.fileName}
              />
              <div className={css.storyTitle}>{story.title}</div>
            </a>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export async function getServerSideProps() {
  const stories = await lukatravelsAPI.fetchStories();

  return { props: { stories } };
}

export default Travel;
