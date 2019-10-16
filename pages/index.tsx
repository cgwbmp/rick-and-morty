import React from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import Characters from './characters';

const Home: NextPage = () => (
  <Characters />
);

Home.getInitialProps = async ({ res }) => {
  if (res) {
    if ('writeHead' in res) {
      res.writeHead(302, {
        Location: '/characters',
      });
      res.end();
    }
  } else {
    Router.push('/characters');
  }
  return {};
};

export default Characters;
