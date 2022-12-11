import SSRProvider from 'react-bootstrap/SSRProvider';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import { useEffect } from 'react';
import localFont from '@next/font/local';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const nunitoFont = localFont({
  src: '../public/fonts/nunito_sans/NunitoSans-Regular.ttf',
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <SSRProvider>
      <main className={nunitoFont.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SSRProvider>
  );
}

export default MyApp;
