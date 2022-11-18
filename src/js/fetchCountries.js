('use strict');

const BASE_URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = name => {
  return fetch(
    'https://restcountries.com/v2/all?fields=name,capital,currencies'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

console.log(fetchCountries(name));

//  let finalURL = `${BASE_URL}${countryInput}?fields=name,capital,population,flags,languages`;

// https://restcountries.com/v3.1/name/all?fields=name,capital,population,flags,languages
