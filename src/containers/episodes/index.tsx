import React from 'react';
import Layout from '../../components/layout';
import Menu from '../../components/menu';
import EpisodeCard from '../../components/episode-card';
import Pagination from '../../components/pagination';
import Grid, { GridItem } from '../../components/grid';
import { Episode } from '../../types';

interface EpisodesProps {
  episodes?: Array<Episode>,
  page?: number,
  pages?: number,
  currentPath?: string,
}

const Episodes: React.FC<EpisodesProps> = (props: EpisodesProps) => {
  const {
    episodes = [],
    page = 1,
    pages = 0,
    currentPath,
  } = props;
  return (
    <Layout>
      <Menu currentPath={currentPath} />
      <Grid vertical>
        {episodes.map((character: Episode) => (
          <GridItem key={character.id}>
            <EpisodeCard
              name={character.name}
              episode={character.episode}
            />
          </GridItem>
        ))}
      </Grid>
      <Pagination page={page} pages={pages} />
    </Layout>
  );
};

export default Episodes;
