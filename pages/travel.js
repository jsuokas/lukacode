global.fetch = require("node-fetch");
import { GraphQLClient } from "graphql-request";

const LUKATRAVELS_API_URL = process.env.LUKATRAVELS_API_URL;
const LUKATRAVELS_API_KEY = process.env.LUKATRAVELS_API_KEY;

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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

Travel.getInitialProps = async () => {
  const graphQLClient = new GraphQLClient(LUKATRAVELS_API_URL, {
    headers: {
      authorization: `Bearer ${LUKATRAVELS_API_KEY}`,
    },
  });

  const query = `
  {
    stories{
      id
      publishedAt
      updatedAt
      title
      time
      thumbnail {
        id
        url
        fileName
        mimeType
        size
        handle
      }
    }
  }
`;

  const { stories } = await graphQLClient.request(query);

  return { stories };
};

export default Travel;
