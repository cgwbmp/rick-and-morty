import React from 'react';
import Layout from '../../components/layout';
import CharacterCard from '../../components/character-card';
import Pagination from '../../components/pagination';
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
      {characters.map((character: Character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
      <Pagination page={page} pages={pages} />
    </Layout>
  );
};

export default Characters;
