import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>The Rick and Morty Wiki</title>
    </Head>
    <header>
      <h1>Welcome to The Rick and Morty Wiki!</h1>
    </header>
    <style jsx>
      {`
        header {
          width: 100%;
          height: 50vh;
          min-height: 60px;
          background: #333;
          color: #fff;
          display: flex;
          font-family: monospace;
          align-items: center;
          justify-content: center;
        }
        header h1 {
          margin: 0;
          line-height: 1.25;
          font-size: 48px;
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default Home;
