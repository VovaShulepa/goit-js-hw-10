// =========   Debounce  =========
import debounce from 'lodash.debounce';
// ===========  Notiflix  =========
import Notiflix from 'notiflix';
// ==========  handle-bars =========
import cardContainer from '../templates/card.hbs';
import ulCountry from '../templates/ul.hbs';
// ============  function  ========
import { fetchCountries } from './fetchCountries';

//  ==========  variables =========
const DEBOUNCE_DELAY = 300;
const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');

countryInput.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  // event.preventDefault();

  let searchQuery = event.target.value;
  searchQuery = searchQuery.trim();

  if (!searchQuery) {
    countryList.innerHTML = '';
    countryCard.innerHTML = '';
    return;
  }

  fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
}

function renderCountryCard(country) {
  if (country.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }

  if (country.length >= 2) {
    countryList.innerHTML = ulCountry(country);
    countryCard.innerHTML = '';
    return;
  }
  countryCard.innerHTML = cardContainer(country[0]);
  countryList.innerHTML = '';
}

function onFetchError(error) {
  if (error.message === '404') {
    Notiflix.Notify.failure('Oops, there is no country with that name');
  }
}
