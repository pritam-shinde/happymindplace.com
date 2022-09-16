import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import { Header, Footer } from '../components/components'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="facebook-domain-verification" content="9ituueu5p1lwsbqnsjhyzrlznqne8x" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
