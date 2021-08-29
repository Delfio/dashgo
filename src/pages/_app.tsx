import React from "react";
import { AppProps } from "next/app";
import ContainerProvider from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContainerProvider>
      <Component {...pageProps} />
    </ContainerProvider>
  );
}

export default MyApp;
