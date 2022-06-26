import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalstyles";
import theme from "../styles/theme";
import { ScreenProvider } from "../providers/Screen";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <ScreenProvider>
          <>
            <Head>
              <title>Admin Painel</title>
            </Head>
            <Component {...pageProps} />
            <GlobalStyle />
          </>
        </ScreenProvider>
      </ThemeProvider>
    </>
  );
}
