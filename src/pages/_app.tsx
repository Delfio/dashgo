import React from "react";
import { AppProps } from "next/app";
import ContainerProvider from "../contexts";
import { makeServer } from "../services/mirage";
import { ReactQueryDevtools } from "react-query/devtools";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContainerProvider>
      <Component {...pageProps} />
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </ContainerProvider>
  );
}

export default MyApp;
