//*=========================================================
//*                     FLAG-APP
//*=========================================================

const fetchCountryByName = () => {
  const url = `https://restcountries.com/v3.1/name/${name} `;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        renderError(`someting went wrong:${res.status}`);
        throw new Error();
      }
      return res.json();
    })
    .then((data) => renderCountries(data))
    .catch((err) => console.log(err));
};

const renderError = () => {
  const countryDiv = document.querySelector(".countries");
  countryDiv.innerHTML += `<h2>countries can not fetched </h2>
    <img src="./img/404.png" /> `;
};

fetchCountryByName("turkey");
// fetchCountryByName("usa");
