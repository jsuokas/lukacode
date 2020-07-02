import { lukatravelsAPI } from "../../utils/request";

function Story({ story }) {
  return (
    <div className="container">
      <div>{story.title}</div>
      <div>{story.time}</div>
      <img
        src={story.thumbnail.url}
        alt={story.thumbnail.fileName}
        width={300}
      />
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
