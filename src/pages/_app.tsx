import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalstyles";
import theme from "../styles/theme";
import { ScreenProvider } from "../providers/Screen";
import { TasksProvider } from "../providers/Tasks";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <ScreenProvider>
        <TasksProvider>
          <>
            <Head>
              <title>Admin Painel</title>
              <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Vujahday+Script&display=swap');
              </style>
            </Head>
            <Component {...pageProps} />
            <GlobalStyle />
          </>
          </TasksProvider>
        </ScreenProvider>
      </ThemeProvider>
    </>
  );
}
