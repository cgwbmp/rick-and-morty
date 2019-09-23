import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { getCharacters as getCharactersApi } from '../api';

interface Character {
  id: string,
  name: string,
}

interface HomeProps {
  characters: Array<Character>,
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { characters } = props;

  return (
    <div>
      <Head>
        <title>The Rick and Morty Wiki</title>
      </Head>
      <header>
        <h1>Welcome to The Rick and Morty Wiki!</h1>
      </header>
      <section>
        {characters.map((character: Character) => (
          <div className="card" key={character.id}>
            <h4>{character.name}</h4>
          </div>
        ))}
      </section>
      <style jsx>
        {`
          :global(body) {
            margin: 0;
          }
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
          section {
            max-width: 1200px;
            display: flex;
            flex-wrap: wrap;
            margin: 1% auto;
          }
          .card {
            width: 48%;
            margin 1%;
            padding: 20px;
            background: #bbb;
            color: #000;
            box-sizing: border-box;
          }
          .card h4 {
            font-family: monospace;
            font-size: 18px;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

Home.getInitialProps = async () => {
  const characters:Array<Character> = await getCharactersApi();
  return { characters };
};

export default Home;
