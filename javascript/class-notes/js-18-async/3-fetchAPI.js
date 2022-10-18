//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

// let userData;

// fetch("https://api.github.com/users")
//   .then((res) => {
//     console.log(res);
//     if (!res.ok) {
//       throw new Error("something went wrong");
//     }
//     return res.json();
//   })
//   .then((data) => updateDOM(data))
//   .catch((data) => console.log(data));

// // console.log(userData);

// const updateDOM = (users) => {
//   console.log(users);
//   const userDiv = document.querySelector(".users");
//   users.forEach((user) => {
//     userDiv.innerHTML += ` <h2>${user.login}</h2>
//     <img src="${user.avatar_url}" width="50px"</>
//     `;
//   });
// };

let userData;
fetch("https://api.github.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error("something wrong");
    } else {
      return res.json();
    }
  })
  .then((data) => updateDOM(data))
  .catch((hata) => console.log(hata));

// console.log(userData);
const updateDOM = (users) => {
  console.log(users);
  const userDiv = document.querySelector(".users");

  users.forEach((user) => {
    console.log(user);

    const { login, avatar_url } = user;

    userDiv.innerHTML += `<h2>${login}</h2><img src="${avatar_url}" width="50px"</>`;
  });
};
