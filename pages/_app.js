import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { makeStore } from "@/store";
import App, { Container } from "next/app";
import Head from "@/layout/head";
import Nav from "@/layout/nav";
import "@/styles/main.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Head title="Home" />
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
