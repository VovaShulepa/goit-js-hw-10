'use strict';

const BASE_URL = fetch('https://restcountries.com/v3.1/name/');

export const fetchCountries = name => {
  let finalURL = `${BASE_URL}${name}?fields=name,capital,population,flags,languages`;

  return fetch(finalURL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
