import '../styles/globals.css'
import "nprogress/nprogress.css";
import '../styles/nprogress.css'
import React from "react"
import type { AppProps } from 'next/app'
import Router from "next/router";
import NProgress from "nprogress"
import AppProvider from '../context/context';

NProgress.configure({showSpinner:false})
export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return  <AppProvider><Component {...pageProps} /></AppProvider>
}
