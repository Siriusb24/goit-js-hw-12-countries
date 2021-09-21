
var debounce = require('lodash.debounce');
import countryTamplate from './templates/countriesTemplate.hbs'
import countriesList from './templates/countryTemplate.hbs'
import refs from './js/refs'
import fetch from './js/fetch'

import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js'
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
defaultModules.set(PNotifyMobile, {})

refs.countryName.addEventListener('input', debounce(getCountry, 500));

function getCountry(e){
    e.preventDefault();
    console.log(e)
  fetch.fetchCountry(e.target.value).then(makeCountryCard).catch(onError);
} 

    function makeCountryCard(country){
        if(country.status === 404){
            refs.countryConteiner.innerHTML = ''
            error({text: `Incorrect search query entered. ${country} not found`});
            return
        } else if (country.length > 10){
            refs.countryConteiner.innerHTML = ''
            alert({text: 'Too many matches found. Please enter a more specific query!'});
            return
        } else if (country.length > 1){
            refs.countryConteiner.innerHTML = countriesList(country)
           return 
        } 
        else if (country.data === null){
            refs.countryConteiner.innerHTML = ''
           return}
        refs.countryConteiner.innerHTML = countryTamplate(...country)
    };

   
function onError(err){
    refs.countryConteiner.innerHTML = '';
    alert({text:`Oops, samething went wrong`});
    return refs.countryConteiner.innerHTML = ''
}


