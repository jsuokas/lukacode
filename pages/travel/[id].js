import { lukatravelsAPI } from "../../utils/request";
import Header from "../../components/lukatravels/header";
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

function Story({ story }) {
  return (
    <div className="container">
      <Header />
      {story ? (
        <>
          <motion.div
            style={{ height: "100%", width: "100%" }}
            {...motionProps}
          >
            <div className="story-thumbnail">
              <div className="story-title">
                <h1>{story.title}</h1>
                <div className="story-time">{story.time}</div>
              </div>
            </div>
          </motion.div>
          Täältä sitten alkaisi seuraava teksti.
        </>
      ) : (
        <div>Not found</div>
      )}

      <style jsx>{`
        .container {
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }

        .story-thumbnail {
          height: 100%;
          min-height: 300px;
          background-image: url("${story.thumbnail.url}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          width: 100%;
        }

        .story-title {
          text-shadow: 0px 2px 10px #000;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        h1 {
          color: #ffffff;
          font-size: 60px;
          margin: 0 0 10px;
        }

        .story-time {
          color: #ffffff;
          font-size: 20px;
          font-weight: 600;
        }
      `}</style>
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
