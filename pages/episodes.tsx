import React from 'react';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Episodes from '../src/containers/episodes';
import { getEpisodes as getEpisodesApi } from '../src/api';
import { Episode, Error } from '../src/types';

interface HomeProps {
  episodes?: Array<Episode>,
  page?: number,
  pages?: number,
  currentPath?: string,
  error?: Error,
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const {
    episodes,
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
          Episodes - The Rick and Morty Wiki
        </title>
      </Head>
      <Episodes
        episodes={episodes}
        page={page}
        pages={pages}
        currentPath={currentPath}
      />
    </>
  );
};

Home.getInitialProps = async ({ query, pathname }) => {
  const page: number = Number(query.page) || 1;
  const response = await getEpisodesApi(page);
  if ('error' in response) {
    return {
      error: response.error,
    };
  }
  const episodes:Array<Episode> = response.results;
  const { pages }: { pages: number } = response.info;
  return {
    episodes,
    page,
    pages,
    currentPath: pathname,
  };
};

export default Home;
