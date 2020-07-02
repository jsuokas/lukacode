import { lukatravelsAPI } from "../utils/request";

function Travel({ stories }) {
  return (
    <div className="container">
      <main>
        <h1 className="title">Lukatravels</h1>
      </main>
      {stories.map((story, idx) => (
        <div key={idx}>
          <div>{story.title}</div>
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

Travel.getInitialProps = async () => {
  const stories = await lukatravelsAPI.fetchStories();

  return { stories };
};

export default Travel;
