import Link from "next/link";
import { lukatravelsAPI } from "../utils/request";
import Header from "../components/lukatravels/header";
import { motion } from "framer-motion";

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
      <motion.div className="story-links" {...motionProps}>
        {stories.map((story, idx) => (
          <Link
            key={idx}
            href="/travel/[id]"
            as={`/travel/${story.id}`}
            prefetch
          >
            <a className="story-link">
              <img
                className="story-thumbnail"
                src={story.thumbnail.url}
                alt={story.thumbnail.fileName}
              />
              <div className="story-title">{story.title}</div>
            </a>
          </Link>
        ))}
      </motion.div>

      <style jsx>{`
        .container {
          padding: 0;
          height: 100%;
        }

        .story-links {
          display: flex;
          flex-direction: column;
        }

        .story-link {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 20px;
          cursor: pointer;
        }

        .story-link:hover {
          background-color: #ededed;
          color: #000;
        }

        .story-thumbnail {
          border-radius: 50% 50%;
          width: 100px;
          height: 100px;
        }

        .story-title {
          padding: 20px;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const stories = await lukatravelsAPI.fetchStories();

  return { props: { stories } };
}

export default Travel;
