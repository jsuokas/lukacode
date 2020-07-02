global.fetch = require("node-fetch");
import { GraphQLClient } from "graphql-request";

const LUKACODE_API_URL = process.env.LUKACODE_API_URL;
const LUKACODE_API_KEY = process.env.LUKACODE_API_KEY;

function Home({ pages }) {
  return (
    <div className="container">
      <main>
        <h1 className="title">lukacode.dev</h1>
      </main>
      {pages.pages.map((it, idx) => (
        <div key={idx}>{it.name}</div>
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

Home.getInitialProps = async () => {
  const graphQLClient = new GraphQLClient(LUKACODE_API_URL, {
    headers: {
      authorization: `Bearer ${LUKACODE_API_KEY}`,
    },
  });

  const query = `
  { 
    pages {
      id
      name
      description
    }
  }
`;

  const pages = await graphQLClient.request(query);

  console.log(pages);

  return { pages };
};

export default Home;