import fetch from 'isomorphic-unfetch';

const entrypoint = 'https://rickandmortyapi.com';

interface ApiResponse {
  results: Array<Character>,
  info: {
    count: number,
  },
}

interface Character {
  id: string,
  name: string,
}

async function getCharacters(): Promise<Array<Character>> {
  const source: Response = await fetch(`${entrypoint}/api/character`);
  const response: ApiResponse = await source.json();
  return response.results;
}

export default getCharacters;
export {
  getCharacters,
};
