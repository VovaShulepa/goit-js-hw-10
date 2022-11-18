const API_URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = name => {
  // let finalURL = `${API_URL}${name}?fields=name,capital,population,flags,languages`;

  return fetch(
    `${API_URL}${name}?fields=name,capital,population,flags,languages,continents`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
