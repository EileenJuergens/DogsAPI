const BASE_URL = 'https://dog.ceo/api';

const getDogsService = async () => {
  const response = await fetch(`${BASE_URL}/breeds/list/all`);
  if (response.ok) return response.json();
  throw new Error('Sorry, something went wrong while request the list of all breeds.');
};

const getDogsImagesService = async breedName => {
  const response = await fetch(`${BASE_URL}/breed/${breedName}/images`);
  if (response.ok) return response.json();
  throw new Error(`Sorry, something went wrong while request the images of the breed ${breedName}.`);
};

export  { getDogsService, getDogsImagesService };
