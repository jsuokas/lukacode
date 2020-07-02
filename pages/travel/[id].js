import { useRouter } from "next/router";
import { lukatravelsAPI } from "../../utils/request";
import Header from "../../components/lukatravels/header";

function Story({ stories }) {
  const router = useRouter();
  const story = stories.find((it) => it.id === router.query.id);

  return (
    <div className="container">
      <Header />
      {story ? (
        <>
          <img
            className="story-thumbnail"
            src={story.thumbnail.url}
            alt={story.thumbnail.fileName}
            width={300}
          />
          <div className="story-title">
            <h1>{story.title}</h1>
            <div className="story-time">{story.time}</div>
          </div>
        </>
      ) : (
        <div>Not found</div>
      )}

      <style jsx>{`
        .container {
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .story-thumbnail {
          width: 100%;
        }

        .story-title {
          position: absolute;
          text-shadow: 0px 2px 10px #000;
          text-align: center;
        }

        h1 {
          color: #ffffff;
          font-size: 60px;
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

export async function getServerSideProps() {
  const stories = await lukatravelsAPI.fetchStories();

  return { props: { stories } };
}

export default Story;
