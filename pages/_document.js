import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>B's Portfolio</title>
          <meta property="og:title" content="B's Portfolio" key="title" />
          <link
            href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
