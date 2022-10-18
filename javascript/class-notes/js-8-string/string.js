// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

//!1- Klasik yöntem (String Literals) ile string tanimlanirsa bu string
//! bir primitive degiskendir.
// const str1 = "Clarusway";
// //Char => C, l, a,....
// const str2 = " Hello";
// const str3 = " Full Stack";

// console.log(str1, typeof str1);

// //!2 - Non-primitive String tanımlama
// const str4 = new String("Non-Primitive");
// console.log(typeof str4);

// //?----------------------------------------
// console.log(str1.toLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

// const sayi = 5;
// const str5 = str1 + str2 + str3 + sayi; // Concatination
// console.log(str5, typeof str5);

//* ---------------------------------------------------
//*  concat() - immutable
//* ---------------------------------------------------

// const esitMi = (str1, str2) => {
//   return str1.toLowerCase() === str2.toLowerCase()
//     ? `${str1} ile ${str2} Esittir`
//     : `${str1} ile ${str2} Esit degildir`;
// };

// console.log(esitMi("Merhaba", "MERHABA"));
// console.log(esitMi("Hello", "hell"));

// tek staır illemi olduğu için return süz de çalışır

// const esitMi = (str1, str2) =>
//   str1.toLowerCase() === str2.toLowerCase()
//     ? `${str1} ile ${str2} Esittir`
//     : `${str1} ile ${str2} Esit degildir`;

// console.log(esitMi("Merhaba", "MERHABA"));
// console.log(esitMi("Hello", "hell"));

// const a = "réservé"; // with accents, lowercase
// const b = "RESERVE"; // no accents, uppercase

// console.log(a.localeCompare(b));
// // expected output: 1
// console.log(a.localeCompare(b, "en", { sensitivity: "base" }));

//? 'BASE: a ≠ b, a = á, a = A'
//? 'ACCENT: a ≠ b, a ≠ á, a = A'
//? 'CASE: a ≠ b, a = á, a ≠ A'

// const str6 = "Full Stack Path and DS Pathtwş";
// console.log(str6.charAt(5));
// console.log(str6.charAt());
// // eğer fonk içinde indis girmezsek ilk harfi döner

// // lengh bir property(obje değişkeni) dir ve  karakter sayısını tutar

// console.log(str6.length);

// // stringin son harfinni çğrenmek istersek uzunşuğu buluruz ve charAt ile buluruz

// console.log(str6.charAt(str6.length - 1));

//* includes() - case sentive
//* ----------------------------------------------------------

// const word = "To be or not to be, that is the question";
// console.log(word.includes("to be"));
// console.log(word.includes("That"));
// console.log(word.includes(""));
// console.log(word.includes("to be", 14));
// console.log(word.includes("to be", 1));

// const toBe = word.indexOf("or");
// console.log(toBe);
// console.log(word);
// console.log(str6);

// const be = word.lastIndexOf("be");
// console.log(be);

//! Search method
