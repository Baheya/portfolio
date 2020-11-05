import '../src/styles/index.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>B's Portfolio</title>
        <meta property="og:title" content="B's Portfolio" key="title" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
