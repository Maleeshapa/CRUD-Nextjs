// pages/_app.js

import '../styles/globals.css'; // Import global styles if you have any



export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

