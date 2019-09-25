import fetch from 'isomorphic-unfetch';
import { Error } from '../types';

const entrypoint = 'https://rickandmortyapi.com';

interface OriginalApiResponse {
  results: Array<{
    id: string,
    name: string,
    gender: string,
    species: string,
    location: {
      name: string,
    },
    status: string,
    image: string,
  }>,
  info: {
    count: number,
    pages: number,
  },
}

interface OriginalApiReject {
  error: string,
}

interface ApiResponse extends OriginalApiResponse {
}

interface ApiReject {
  error: Error,
}

async function getCharacters(page: number = 1): Promise<ApiResponse | ApiReject> {
  const source: Response = await fetch(`${entrypoint}/api/character?page=${page}`);
  const response: OriginalApiResponse | OriginalApiReject = await source.json();
  if ('error' in response) {
    return {
      error: {
        code: source.status,
        message: response.error,
      },
    };
  }
  return response;
}

export default getCharacters;
export {
  getCharacters,
};
