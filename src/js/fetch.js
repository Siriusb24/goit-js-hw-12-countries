const BASE_URL = `https://restcountries.eu/rest/v2/name`

function fetchCountry(form){
    return fetch(`${BASE_URL}/${form}`).then(res => res.json());
} 

export default {fetchCountry}