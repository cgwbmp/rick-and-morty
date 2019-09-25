import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import Preloader from '../src/components/preloader';

interface CustomAppState {
  pending: boolean,
}

class CustomApp extends App<{}, {}, CustomAppState> {
  constructor(props) {
    super(props);
    this.state = {
      pending: false,
    };
    this.setPending = this.setPending.bind(this);
    this.unsetPending = this.unsetPending.bind(this);
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.setPending);
    Router.events.on('routeChangeComplete', this.unsetPending);
    Router.events.on('routeChangeError', this.unsetPending);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.setPending);
    Router.events.off('routeChangeComplete', this.unsetPending);
    Router.events.off('routeChangeError', this.unsetPending);
  }

  setPending() {
    this.setState({
      pending: true,
    });
  }

  unsetPending() {
    this.setState({
      pending: false,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { pending } = this.state;
    /* eslint-disable react/jsx-props-no-spreading */
    return (
      <>
        <Component {...pageProps} />
        {(pending) ? <Preloader /> : null}
      </>
    );
    /* eslint-enable react/jsx-props-no-spreading */
  }
}

export default CustomApp;
