import React from 'react';
import Layout from '../../components/layout';
import CharacterCard from '../../components/character-card';
import Pagination from '../../components/pagination';
import Grid, { GridItem } from '../../components/grid';
import { Character } from '../../types';

interface CharactersProps {
  characters?: Array<Character>,
  page?: number,
  pages?: number,
}

const Characters: React.FC<CharactersProps> = (props: CharactersProps) => {
  const {
    characters = [],
    page = 1,
    pages = 0,
  } = props;
  return (
    <Layout>
      <Grid>
        {characters.map((character: Character) => (
          <GridItem key={character.id}>
            <CharacterCard
              name={character.name}
              image={character.image}
            />
          </GridItem>
        ))}
      </Grid>
      <Pagination page={page} pages={pages} />
    </Layout>
  );
};

export default Characters;
