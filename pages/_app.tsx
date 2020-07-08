import "../css/styles.css";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
