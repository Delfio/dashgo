import React from "react";
import { AppProps } from "next/app";
import ContainerProvider from "../contexts";
import { makeServer } from "../services/mirage";


if(process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContainerProvider>
      <Component {...pageProps} />
    </ContainerProvider>
  );
}

export default MyApp;
