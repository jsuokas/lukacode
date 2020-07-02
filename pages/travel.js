import Link from "next/link";
import { lukatravelsAPI } from "../utils/request";
import Header from "../components/lukatravels/header";

function Travel({ stories }) {
  return (
    <div className="container">
      <Header />
      {stories.map((story, idx) => (
        <Link key={idx} href={`/travel/${story.id}`}>
          <div>{story.title}</div>
        </Link>
      ))}

      <style jsx>{`
        .container {
          padding: 0;
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
