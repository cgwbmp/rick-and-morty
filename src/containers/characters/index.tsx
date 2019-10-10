import React from 'react';
import Layout from '../../components/layout';
import Menu from '../../components/menu';
import CharacterCard from '../../components/character-card';
import Pagination from '../../components/pagination';
import Grid, { GridItem } from '../../components/grid';
import { Character } from '../../types';

interface CharactersProps {
  characters?: Array<Character>,
  page?: number,
  pages?: number,
  currentPath?: string,
}

const Characters: React.FC<CharactersProps> = (props: CharactersProps) => {
  const {
    characters = [],
    page = 1,
    pages = 0,
    currentPath,
  } = props;
  return (
    <Layout>
      <Menu currentPath={currentPath} />
      <Grid>
        {characters.map((character: Character) => (
          <GridItem key={character.id}>
            <CharacterCard
              name={character.name}
              image={character.image}
              status={character.status}
            />
          </GridItem>
        ))}
      </Grid>
      <Pagination page={page} pages={pages} />
    </Layout>
  );
};

export default Characters;
