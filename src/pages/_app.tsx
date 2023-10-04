import "@styles/index.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import React from "react";
import GlobalStyle from "@components/GlobalStyle";
import { GlobalThemeProvider } from "@contexts/GlobalTheme";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AppLayout } from "@layouts/AppLayout";
import type { AppProps } from "next/app";
import Head from "next/head";

config.autoAddCss = false;

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
