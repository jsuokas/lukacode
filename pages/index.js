import { lukacodeAPI } from "../utils/request";
import css from "../css/pages/home.css";

function Home() {
  return (
    <div className={css.container}>
      <div className={css.main}>
        <h1>lukacode.dev</h1>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const pages = await lukacodeAPI.fetchPages();

  return { props: { pages } };
}

export default Home;
