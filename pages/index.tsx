
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Characters from '../src/modules/characters';
import { getCharacters as getCharactersApi } from '../src/api';
import { Character } from '../src/types';

interface HomeProps {
  characters?: Array<Character>,
  page?: number,
  pages?: number,
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { characters, page, pages } = props;
  return (
    <>
      <Head>
        <title>
          Characters - The Rick and Morty Wiki
        </title>
      </Head>
      <Characters characters={characters} page={page} pages={pages} />
    </>
  );
};

Home.getInitialProps = async ({ query }) => {
  const page = Number(query.page) || 1;
  const response = await getCharactersApi(page);
  if ('error' in response) {
    return {};
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
