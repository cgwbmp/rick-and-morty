import fetch from 'isomorphic-unfetch';

const entrypoint = 'https://rickandmortyapi.com';

interface ApiResponse {
  results: Array<{
    id: string,
    name: string,
  }>,
  info: {
    count: number,
    pages: number,
  },
}

interface ApiReject {
  error: string,
}

async function getCharacters(page: number = 1): Promise<ApiResponse | ApiReject> {
  const source: Response = await fetch(`${entrypoint}/api/character?page=${page}`);
  const response: ApiResponse = await source.json();
  return response;
}

export default getCharacters;
export {
  getCharacters,
};
