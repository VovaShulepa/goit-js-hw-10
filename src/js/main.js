// =========  Debounce =========
import Debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

// =========== Notiflix  ========
import Notiflix from 'notiflix';
// =============================

import { fetchCountries } from './fetchCountries';

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const OnCountryInput = event => {
  event.preventDefault();

  const searchQuery = inputEl.value.trim();

  fetchCountries(searchQuery)
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      if (err.message === '404') {
        alert('Country not found!');
      }
    })
    .finally(() => {
      event.target.reset();
    });
  console.log(searchQuery);
};

inputEl.addEventListener('input', OnCountryInput);
