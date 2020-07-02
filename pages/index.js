import { lukacodeAPI } from "../utils/request";

function Home({ pages }) {
  return (
    <div className="container">
      <main>
        <h1 className="title">lukacode.dev</h1>
      </main>
      {pages.map((it, idx) => (
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
    </div>
  );
}

Home.getInitialProps = async () => {
  const pages = await lukacodeAPI.fetchPages();

  return { pages };
};

export default Home;
