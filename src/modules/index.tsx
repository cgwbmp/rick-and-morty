import React from 'react';
import Head from 'next/head';

interface Character {
  id: string,
  name: string,
}

const characters: Array<Character> = [
  { id: '1', name: 'Character 1' },
  { id: '2', name: 'Character 2' },
  { id: '3', name: 'Character 3' },
  { id: '4', name: 'Character 4' },
];

const Home: React.FC = () => (
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
          display: flex;
          flex-wrap: wrap;
          margin 10px -10px;
        }
        .card {
          width: 45%;
          margin 10px;
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

export default Home;
