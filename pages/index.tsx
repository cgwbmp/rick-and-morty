import React from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>
        Characters - The Rick and Morty Wiki
      </title>
    </Head>
  </>
);

Home.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/characters',
    });
    res.end();
  } else {
    Router.push('/characters');
  }
  return {};
};

export default Home;
