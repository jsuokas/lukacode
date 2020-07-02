import { lukacodeAPI } from "../utils/request";

function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">lukacode.dev</h1>
      </main>

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
  const pages = await lukacodeAPI.fetchPages();

  return { props: { pages } };
}

export default Home;
