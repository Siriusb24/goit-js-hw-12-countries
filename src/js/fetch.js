const BASE_URL = `https://restcountries.eu/rest/v2/name`
const option = {
    method : "GET",
    mode: 'no-cors'
}
  
function fetchCountry(form){
    return fetch(`${BASE_URL}/${form}`, option).then(res => res.json());
} 

export default {fetchCountry}