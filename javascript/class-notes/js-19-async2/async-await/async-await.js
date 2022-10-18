//*=================================================
//*              ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

// const getNews = async function () {
//   const apiKey = "73db9a38c5e247c390e58597735afd67";
//   const url =
//     "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;

//   try {
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error("Someting went wrong: ${res.status}");
//     }

//     const data = await res.json();
//     // console.log(data.articles);
//     renderNews(data.articles);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const renderNews = (news) => {
//   const newsList = document.getElementById("newsList");

//   news.forEach((item) => {
//     const { title, description, urlToImage } = item;

//     newsList.innerHTML += `
//     <div class=>
//     <div class="card" style="width: 18rem;">
//     <img src="${urlToImage}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${title}</h5>
//       <p class="card-text">${description}.</p>
//       <a href="${url}" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
//   </div>
//   `;
//   });
// };

// window.addEventListener("load", getNews);

// let isError = false;

// const getNews = async function () {
//   const API_KEY = "55e3f1fdc1c94581b6b11537c9b8f8bf";
//   const url =
//     "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       isError = true;
//       //   throw new Error(`Something went wrong: ${res.status} `);
//     }
//     const data = await res.json();
//     // console.log(data.articles);
//     renderNews(data.articles);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const renderNews = (news) => {
//   const newsList = document.getElementById("news-list");
//   if (isError) {
//     newsList.innerHTML += `
//     <h2>news fetched/h2>
//     <img src="./img/404.png" />
//     `;
//     return;
//   }

//   news.forEach((item) => {
//     const { title, description, urlToImage, url } = item; //! dest
//     newsList.innerHTML += `
//     <div class="col-md-6 col-lg-4 col-xl-3">
//       <div class="card">
//         <img src="${urlToImage}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${title}</h5>
//           <p class="card-text">${description}</p>
//           <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
//         </div>
//       </div>
//     </div>
//     `;
//   });
// };

// window.addEventListener("load", getNews);

// 3 . kez çözüm :
let isError = false;
const getNews = async function () {
  const apikey = "73db9a38c5e247c390e58597735afd67";
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apikey;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true;
      // throw new Error(`sıkıntı var:${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const renderNews = (news) => {
  const newslist = document.getElementById("news-list");
  if (isError) {
    newslist.innerHTML += `<h2>hata var</h2>`;
  } else {
    news.forEach((item) => {
      const { title, description, urlToImage, url } = item;
      newslist.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
       <div class="card">
         <img src="${urlToImage}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${title}</h5>
           <p class="card-text">${description}</p>
           <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
         </div>
       </div>
     </div>
    `;
    });
  }
};

window.addEventListener("load", getNews);
