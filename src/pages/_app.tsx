/* eslint-disable @next/next/no-page-custom-font */
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "../redux/store";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
          <Head>
            <title>ECFSC</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta
              name="description"
              content="ECFSC"
            ></meta>
            <link rel="shortcut icon" href="/icons/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
              rel="stylesheet"
            />
          </Head>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
          />
          <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  </>
);

export default App;