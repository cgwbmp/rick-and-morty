import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getCharacters as getCharactersApi } from '../api';

interface Character {
  id: string,
  name: string,
}

interface HomeProps {
  characters: Array<Character>,
  page: number,
  pages: number,
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { characters, page, pages } = props;
  const hasNext = page < pages;
  const hasPrev = page > 1;

  return (
    <div>
      <Head>
        <title>
          The Rick and Morty Wiki
        </title>
      </Head>
      <header>
        <h1>
          Welcome to The Rick and Morty Wiki!
        </h1>
      </header>
      <section>
        {characters.map((character: Character) => (
          <div className="card" key={character.id}>
            <h4>
              {character.name}
            </h4>
          </div>
        ))}
      </section>
      <footer>
        {
          (hasPrev) ? (
            <Link href={{ pathname: '/', query: { page: page - 1 } }}>
              <a href="/">
                Previos page
              </a>
            </Link>
          ) : (
            <button type="button" disabled>
              Previos page
            </button>
          )
        }
        {
          (hasNext) ? (
            <Link href={{ pathname: '/', query: { page: page + 1 } }}>
              <a href="/">
                Next page
              </a>
            </Link>
          ) : (
            <button type="button" disabled>
              Next page
            </button>
          )
        }
      </footer>
      <style jsx>
        {`
          :global(body) {
            margin: 0;
          }
          header {
            width: 100%;
            height: 50vh;
            padding: 20px;
            min-height: 60px;
            background: #333;
            color: #fff;
            display: flex;
            font-family: monospace;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
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
            margin: auto;
            padding: 1%;
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
            line-height: 1.25;
            margin: 0;
          }
          footer {
            display: flex;
          }
          footer a,
          footer button {
            width: 50%;
            border: 0;
            background: #333;
            color: #fff;
            padding: 20px;
            font-family: monospace;
            line-height: 1.25;
            font-size: 18px;
            text-align: center;
            cursor: pointer;
            text-decoration: none;
            box-sizing: border-box;
            font-weight: bold;
          }
          footer a:hover {
            background: #000;
          }
          footer button[disabled] {
            border: 1px solid;
            background: #fff;
            color: #333;
            opacity: 0.25;
            cursor: default;
          }
        `}
      </style>
    </div>
  );
};

Home.getInitialProps = async ({ query }) => {
  const page = Number(query.page) || 1;
  const response = await getCharactersApi(page);
  if ('error' in response) {
    return {
      characters: [],
      page,
      pages: 0,
    };
  }
  const characters:Array<Character> = response.results;
  const { pages }: { pages: number } = response.info;
  return {
    characters,
    page,
    pages,
  };
};

export default Home;
