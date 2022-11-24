import "../styles/globals.css";

import { DvanProvider } from "../context/DvanContext";

function MyApp({ Component, pageProps }) {
  return (
    <DvanProvider>
      <Component {...pageProps} />
    </DvanProvider>
  );
}

export default MyApp;
