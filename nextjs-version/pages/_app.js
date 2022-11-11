import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i"
        />
        <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.css" />
        <link
          rel="stylesheet"
          href="../vendor/owl-carousel/assets/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="../vendor/photoswipe/photoswipe.css" />
        <link
          rel="stylesheet"
          href="../vendor/photoswipe/default-skin/default-skin.css"
        />
        <link rel="stylesheet" href="../vendor/select2/css/select2.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link
          rel="stylesheet"
          href="css/style.header-spaceship-variant-one.css"
          media="(min-width: 1200px)"
        />
        <link
          rel="stylesheet"
          href="css/style.mobile-header-variant-one.css"
          media="(max-width: 1199px)"
        />
        <link rel="stylesheet" href="../vendor/fontawesome/css/all.min.css" />
      </Head>

      <Script src="../vendor/jquery/jquery.min.js" />
      <Script src="../vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="../vendor/owl-carousel/owl.carousel.min.js" />
      <Script src="../vendor/nouislider/nouislider.min.js" />
      <Script src="../vendor/photoswipe/photoswipe.min.js" />
      <Script src="../vendor/photoswipe/photoswipe-ui-default.min.js" />
      <Script src="../vendor/select2/js/select2.min.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
