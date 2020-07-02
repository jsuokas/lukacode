import Link from "next/link";
import { lukatravelsAPI } from "../utils/request";

function Travel({ stories }) {
  return (
    <div className="container">
      <main>
        <h1 className="title">Lukatravels</h1>
      </main>
      {stories.map((story, idx) => (
        <div key={idx}>
          <Link key={idx} href={`/travel/${story.id}`}>
            <div>{story.title}</div>
          </Link>
          <div>{story.time}</div>
          <img
            src={story.thumbnail.url}
            alt={story.thumbnail.fileName}
            width={300}
          />
        </div>
      ))}

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
