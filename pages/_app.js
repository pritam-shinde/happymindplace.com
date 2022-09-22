import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css'
import { Header, Footer } from '../components/components'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import "swiper/css/bundle";
import 'aos/dist/aos.css'
import Script from 'next/script';
import AOS from 'aos';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  })

  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="facebook-domain-verification" content="9ituueu5p1lwsbqnsjhyzrlznqne8x" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
    <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
  </>)
}

export default MyApp
