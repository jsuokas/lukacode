import Link from "next/link";
import { lukatravelsAPI } from "../utils/request";
import Header from "../components/lukatravels/header";

function Travel({ stories }) {
  return (
    <div className="container">
      <Header />
      <div className="story-links">
        {stories.map((story, idx) => (
          <Link key={idx} href={`/travel/${story.id}`}>
            <div className="story-link">
              <img
                className="story-thumbnail"
                src={story.thumbnail.url}
                alt={story.thumbnail.fileName}
              />
              <div className="story-title">{story.title}</div>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 0;
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
