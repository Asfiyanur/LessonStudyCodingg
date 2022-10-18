//* ======================================================
//*                   FOR EACH METHOD
//* ======================================================

console.log("****** ITERATION **********");

//
//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

// const prices = [100, 250, 50, 89];
// prices.forEach((p) => console.log(p));

// ? ornek:pricesleri topla

// let sum = 0;
// prices.forEach((price) => (sum += price));
// console.log("sum:", sum);

//? Iterating over an array means accessing each element of array one by one. There may be many ways of iterating over an array in JavaScript.(Herbir ara toplam bu şekildre yazdırışmış olur)

// const prices = [100, 250, 50, 89];
// let total = 0;
// prices.forEach((price, index) => {
//   total += price;
//   console.log(`${index + 1}.iteration:${total} `);
//   prices[index] = Math.trunc(price * 1.1);
// });
// console.log(prices);

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//?-------------- ÖRNEK 1 -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

// const bigNames = names.map((names) => names.toUpperCase());
// console.log(bigNames, names);
// console.log(names.map((names) => names.toUpperCase()));

//?-------------- ÖRNEK 2-------------------
//? tlFiyatlar dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

// const euro = 18.23;
// const dolar = 18.19;
// const tlFiyatlar = [100, 150, 100, 50, 80];

// const euroPrices = tlFiyatlar.map((tl) => Number((tl / euro).toPrecision(3)));
// console.log(euroPrices);

//?-------------- ÖRNEK 3-------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

const products = [
  "Iphone12",
  "samsungS20",
  "lenovo",
  "macbook pro",
  "mac air",
  "Galaxy tablet",
  "macbook",
  "Iphone12",
  "mac air",
  "lenovo",
  "macbook pro",
  "samsungS20",
];
//! Orjinal diziyi degistirdik.
products.map((p, i, arr) => (arr[i] = p.toUpperCase()));
console.log(products);

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================

//* ======================================================
//*                 FILTER METHOD
//* ======================================================

//* ======================================================
//*                 REDUCE METHOD
//* ======================================================
