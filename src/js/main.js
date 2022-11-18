// =========  Debounce =========
import Debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

// =========== Notiflix  ========
import Notiflix from 'notiflix';
// =============================
import { fetchCountries } from './fetchCountries';

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

// console.log(fetchCountries(name));

const OnCountryInput = event => {
  const searchQuery = countryInput.value.trim();

  fetchCountries(searchQuery)
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      console.log(data);
    })
    .catch(err => {
      err.message;
    })
    .finally(() => {
      event.target.reset();
    });
  console.log(searchQuery);
};

countryInput.addEventListener('input', OnCountryInput);
