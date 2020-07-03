import { lukacodeAPI } from "../utils/request";
import css from "../css/pages/home.css";
import { motion } from "framer-motion";

const motionProps = {
  initial: "hidden",
  animate: "enter",
  exit: "exit",
  variants: {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  },
  transition: { duration: 1 },
};

function Home() {
  return (
    <motion.div {...motionProps} className={css.container}>
      <div className={css.main}>
        <h1>lukacode.dev</h1>
      </div>
    </motion.div>
  );
}

export async function getServerSideProps() {
  const pages = await lukacodeAPI.fetchPages();

  return { props: { pages } };
}

export default Home;
