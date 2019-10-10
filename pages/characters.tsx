import React from 'react';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Characters from '../src/containers/characters';
import { getCharacters as getCharactersApi } from '../src/api';
import { Character, Error } from '../src/types';

interface HomeProps {
  characters?: Array<Character>,
  page?: number,
  pages?: number,
  currentPath?: string,
  error?: Error,
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const {
    characters,
    page,
    pages,
    currentPath,
    error,
  } = props;
  if (error) {
    return <ErrorPage statusCode={error.code} />;
  }
  return (
    <>
      <Head>
        <title>
          Characters - The Rick and Morty Wiki
        </title>
      </Head>
      <Characters
        characters={characters}
        page={page}
        pages={pages}
        currentPath={currentPath}
      />
    </>
  );
};

Home.getInitialProps = async ({ query, pathname }) => {
  const page: number = Number(query.page) || 1;
  const response = await getCharactersApi(page);
  if ('error' in response) {
    return {
      error: response.error,
    };
  }
  const characters:Array<Character> = response.results;
  const { pages }: { pages: number } = response.info;
  return {
    characters,
    page,
    pages,
    currentPath: pathname,
  };
};

export default Home;
