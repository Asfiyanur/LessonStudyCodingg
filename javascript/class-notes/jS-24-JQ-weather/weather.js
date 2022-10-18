const formJs = document.querySelector("form");
const formJquery = $("form").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);
$(window).on("load", () => {
  console.log("window");
});

$(document).ready(() => {
  console.log("window");
});

formJquery.submit((e) => {
  e.preventDefault();
  getWeatherDataFormApi();
});

// formJquery.on("submit", (e) => {
//   e.preventDefault();
//   getWeatherDataFormApi();
// });

const getWeatherDataFormApi = () => {
  //   console.log("submit clickedd jhlhl");
  const apikey = DecryptStringAES(localStorage.getItem("tokenKEY"));
  const cityName = inputJQ.val();
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=${units}&lang=${lang}`;

  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: (response) => {
      console.log(response);
      const { main, sys, name, weather } = response;
      const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
      //alternative iconUrl
      const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      const createdLi = $("<li></li>");
      createdLi.addClass("city"),
        createdLi.html(
          `<h2 class="city-name" data-name="${name}, ${sys.country}">
  <span>${name}</span>
  <sup>${sys.country}</sup>
</h2>
<div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
<figure>
  <img class="city-icon" src="${iconUrl}">
  <figcaption>${weather[0].description}</figcaption>
</figure>`
        );

      listJQ.prepend(createdLi);
      formJquery.trigger("reset");
    },
    beforeSend: (request) => {
      console.log("request");
    },
    complete: () => {
      console.log("complete");
    },
    error: (XMLHttoRequest) => {
      console.log(XMLHttoRequest);
    },
  });
};
