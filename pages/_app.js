import '../src/styles/index.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>B's Portfolio</title>
        <meta property="og:title" content="B's Portfolio" key="title" />
        <meta
          name="description"
          content="A colorful, but minimalistic portfolio developed by Baheya Khalifa, to showcase her fullstack web applications."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
