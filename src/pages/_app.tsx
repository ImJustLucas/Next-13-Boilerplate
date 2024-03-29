import "remixicon/fonts/remixicon.css";

import React from "react";

import type { AppProps } from "next/app";
import Head from "next/head";

import { AppLayout } from "@layouts/AppLayout";
import GlobalStyle from "@styles/GlobalStyle";

import { GlobalThemeProvider } from "@contexts/GlobalTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalThemeProvider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover, height=device-height"
        />
        <title>Next - Boilerplate</title>
      </Head>
      <AppLayout>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppLayout>
    </GlobalThemeProvider>
  );
}
