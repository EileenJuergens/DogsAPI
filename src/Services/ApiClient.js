const BASE_URL = 'https://dog.ceo/api/breeds/list/all'

export const fetchDogs = () => {
  return fetch(BASE_URL)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching`)
    });
};
