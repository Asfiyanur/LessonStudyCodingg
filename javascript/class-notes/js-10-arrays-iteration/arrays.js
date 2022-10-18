// ?=====================================================================
// ? LOOP-ARRAYS
// ?====================================================================

//! 1.Örnek;

// const rakamlar = [20, 30, 40, 50, 60];
// let toplam = 0;
// for (let i = 0; i < rakamlar.length; i++) {
//   toplam += rakamlar[i];
// }

// console.log(toplam);

//! 2.Örnek;

// const dizi = [-5, 30, -25, 6, 12, -10];

// const topla = (n) => {
//   let negatifler = 0;
//   let pozitifler = 0;
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] < 0) {
//       negatifler += n[i];
//     } else {
//       pozitifler += n[i];
//     }
//   }
//   console.log(`dizideki pozitiflerin toplamı: ${pozitifler}`);
//   console.log(`dizideki negatiflerin toplamı: ${negatifler}`);
// };
// topla(dizi);

//! 3.Örnek;

// const dizi = [-5, 30, -25, 6, 12, -10];
// let negatifler = [];
// let pozitifler = [];
// const diziAyır = (n) => {
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] < 0) {
//       negatifler.push(n[i]);
//     } else {
//       pozitifler.push(n[i]);
//     }
//   }
// };
// diziAyır(dizi);
// console.log(pozitifler);
// console.log(negatifler);

//! 4.Örnek;

//? Dizideki notlarin ortalamasini hesaplayiniz.

// const notlar = [55, 77, 23, 89, 100];

// let toplam = 0;

// for (let i = 0; i < notlar.length; i++) {
//   toplam += notlar[i];
// }

// console.log(toplam / notlar.length);

//? ===================================================================
// ?????????????? for...in LOOP
//? ===================================================================

//! 5.Örnek;

// const notlar = [55, 77, 23, 85, 100];

// let toplam = 0;

// for (let i in notlar) {
//   toplam += notlar[i];
// }

// console.log(toplam / notlar.length);

//! 6.Örnek;

// const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
// const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

// let adSoyad = [];
// for (let i in adlar) {
//   adSoyad[i] = adlar[i] + " " + soyAdlar[i];
// }
// console.log(`Ad Soyad birleşimi : `, adSoyad);

// const birlestir = (arr1, arr2) => {
//   let adSoyad = [];
//   for (let i in arr1) {
//     adSoyad[i] = arr1[i] + arr2[i];
//   }
//   console.log(`Ad Soyad birleşim fonksiyon ile : `, adSoyad);
// };

// birlestir(adlar, soyAdlar);

//! 7.Örnek;
//*? SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//*? ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*? fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//*? */ fonksiyon "ogrenci bulunamadi" dondurulmelidir.

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudents = (arr, search) => {
//   let counter = 0;
//   for (let i in arr) {
//     if (search === arr[i]) {
//       counter++;
//     }
//   }
//   if (!counter) {
//     return `${search} can not be found`;
//   } else {
//     return `${search} found ${counter} times `;
//   }
// };

// const name = prompt("Please enter a name").toLocaleLowerCase();

// console.log(findStudents(students, name));

// !2.yol

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudentsOf = (arr, search) => {
//   let counter = 0;
//   for (let item of arr) {
//     if (search === item) {
//       counter++;
//     }
//   }
//   if (!counter) {
//     return `${search} can not be found`;
//   } else {
//     return `${search} found ${counter} times `;
//   }
// };

// const studentsName = prompt("Please enter a name").toLocaleLowerCase();

// console.log(findStudentsOf(students, studentsName));

// ! 3.yol

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudentsOf = (arr, search) => {
//   let counter = 0;
//   for (let item of arr) {
//     //! ternary yöntemi
//     //? search === item ? counter++ : null;
//     //! short-circuit yöntemi: && -> kosul true ise çalısır(elsesi olmayan iflerde kullanılabilir)
//     search === item && counter++;
//     //! short-circuit yöntemi: || -> kosul false ise çalısır(elsesi olmayan iflerde kullanılabilir)
//     //? search === item || counter--;
//   }
//   return !counter
//     ? `${search} can not be found`
//     : `${search} found ${counter} times `;
// };

// const studentsName = prompt("Please enter a name").toLocaleLowerCase();

// console.log(findStudentsOf(students, studentsName));
