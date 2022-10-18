//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

// const car = {
//   name: "bmw",
//   model: 1990,
//   engine: 1.6,
//   colors: ["blue", "purple"],
// };

// //* 1.YONTEM (Classical)
// const name1 = car.name;
// const model1 = car["model"];
// //* 2.YONTEM: DESTRUCTURING
// const { name, colors, model, engine } = car;
// console.log(name, model, engine, colors);
// //* EXAMPLE: NESTED
// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },
//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
// };
// const { car1, car2 } = car;
// console.log(car1);

// const { name: c1Name, model: c1Model } = car1;
// const { name: c2Name, model: c2Model } = car2;

// console.log(c1Name, c2Name);

// const team = [
//   {
//     name: "Josh",
//     surname: "Barry",
//     job: "developer",
//     age: 30,
//   },
//   {
//     name: "Josh",
//     surname: "Barry",
//     job: "tester",
//     age: 45,
//   },
//   {
//     name: "Hazel",
//     surname: "Nut",
//     job: "team lead",
//     age: 40,
//   },
// ];

// // Clasical

// team.forEach((p) => {
//   console.log("***********");
//   console.log("name:", p.name);
//   console.log("name:", p.surname);
//   console.log("name:", p["job"]);
//   console.log("name:", p.age);
// });

// // dectructuring

// team.forEach((p) => {
//   const { name, surname, job, age } = p;
//   console.log("***********");
//   console.log("name:", p.name);
//   console.log("name:", p.surname);
//   console.log("name:", p["job"]);
//   console.log("name:", p.age);
// });

// // function
// const getInfo = () => {
//   return {
//     id: 1,
//     productName: "ıphone",
//     price: 30000,
//   };
// };
// console.log(getInfo());
// const { productName, price } = getInfo();
// console.log("Product Name:", productName);
// console.log("Product Price:", price);

// //? Fonksyionlarin obje parametreleri dogrudan dest. yapilabilir.
// const calculate = ({ id, price }) => {
//   console.log(price * 1.1);
// };

// calculate({ id: 1, price: 3000 });

// //* ======================================================
// //*  DESTRUCTURING (ARRAY)
// //* ======================================================
// const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

// //*Classical
// const mehmet = names[1]; //* indexing

// const [p1, p2, , p4] = names;
// console.log(p1, p2, p4);

//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
const autos = ["reno", "anadol", "bmw", "mercedes", "ferrari"];

const [ren, anad, , ...restAuto] = autos;
console.log(ren, anad);
console.log(restAuto);

//*======================================================
//*  SPREAD (...)
//* ======================================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const flyingVecihles = ["Aircraft", "Helicopter", "QuadCopter"];
const automobiles = ["Truck", "Bus", "Car", "SUV"];
const allVehicles = [...flyingVecihles, ...automobiles];
console.log(allVehicles);

// * example
