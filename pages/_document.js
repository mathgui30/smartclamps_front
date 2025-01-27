// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link rel="apple-touch-icon" href="/logo192.png" />

          {/* Adicione o link do Google Fonts aqui */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />

          {/* Este script é necessário para que o Next.js funcione corretamente */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // This script is needed for Next.js to work correctly
                if (document.cookie && document.cookie.includes('next-font-preferences')) {
                  var html = document.documentElement;
                  html.classList.add('next-font-preferences');
                }
              `,
            }}
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
