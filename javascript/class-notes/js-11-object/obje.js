// reduce ~exmp : ~~~~~~~~~~~~~~

// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
// const sumOfRaisedSalaries = salaries
//   .filter((sal) => sal <= 9000)
//   .map((sal) => Math.trunc(sal * 1.1))
//   .reduce((acc, salary) => acc + salary, 0);
// console.log(sumOfRaisedSalaries);

// ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

// console.log("******* Objects *********");

// const arabalar = new Object();
// arabalar.marka = "bmw";
// arabalar.motor = "1.3";
// arabalar.model = 2022;
// arabalar.lpg = true;
// console.log(arabalar);

//!Read
// console.log(arabalar.lpg); //? .notation
// console.log("MODEL:", arabalar["model"]); //? Square bracket notation

// //? Square bracket yonteminin en buyuk avantaji key degerini
// //? degisken olarak kullanabilmemizdir.

// const anahtar = "marka";
// console.log(arabalar[anahtar]); /* bu yazılış key arıyor */

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

// //? Object Constructure -çok sık kullanılmıyor obje  aklıbı yapmış oluyorsunuz.
// function Personel(id, ad, maas) {
//   this.id = id;
//   this.ad = ad;
//   this.maas = maas;
//   // console.log(this);
// }

// const kisi1 = new Personel("1234567890", "Mustafa", 15000);
// const kisi2 = new Personel("177567890", "Canan", 25000);
// // console.log(kisi1);
// console.log(kisi1.ad);
// console.log(kisi2.maas);
// console.log(kisi2["id"]);

//* ---------------------------------------------------------
//* 3- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

// const worker = {
//   name: "Can",
//   surname: "Canan",
//   age: 33,
//   job: "developer",
//   languages: ["C++", "Java", "Javacript", "Pyhton", "Go"],
//   salary: "140000",
// };
// console.log(worker);

// console.log("JOB:", worker.job);
// console.log("Lang:", worker["languages"]);

// console.log(worker.languages[2]);

// worker["languages"].forEach((l) => console.log(l));

// worker.dob = "1990";
// worker.email = "can@gmail.com";
// console.log(worker);

// // worker["salary"] = worker["salary"] * 1.1;
// worker["salary"] *= 1.1;
// console.log(worker);

// //* Object Copy
// const person = worker; //! Shallow (Sig - Sığ) Copying
// console.log("PERSON:", person);

// //! Object.create(), Object.assign(), spread (...), concat() , slice() -> Shallow Copying

// person.dob = 2000;
// console.log("PERSON:", person);

// //! Deep Copy
// let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
// // console.log(JSON.stringify(worker));

// deepCopyOfWorker.dob = "2022";
// console.log("DEEP:", deepCopyOfWorker);

//* ======================================================
//*              Object Metotlari
//* ======================================================

// const personal = {
//   name: "Can",
//   surname: "Canan",
//   dob: "1990",
//   job: "developer",
//   salary: "140000",
//   drivingLicense: true,
//   calculateAge: function () {
//     return new Date().getFullYear() - this.dob;
//   },
// };

// console.log("DOB:", personal.calculateAge());

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

const people = {
  person1: {
    name: "can",
    surname: "canan",
    dob: "1990",
    job: "science",
    salary: "140000",
    drivingLisans: "true",
  },

  person2: {
    name: "john",
    surname: "sweet",
    dob: "1995",
    job: "developer",
    salary: "175000",
    drivingLisans: "false",
  },

  person3: {
    name: "asf",
    surname: "green",
    dob: "1992",
    job: "data",
    salary: "175000",
    drivingLisans: "false",
  },
};

// console.log(people);
// console.log("salary:", people.person2.salary);

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

// iterable : sıralı olanalrın içinde dönülebilen,gezilebilen elemanlara,denir

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

// // !!!!!!!!!!!!!!
// console.log(Object.keys(people));
// console.log(Object.values(people));
// console.log(Object.entries(people));
// // !!!!!!!!!!!!!!

// //! FOR - IN
// //* for (key in object) {
// //*   // code block to be executed
// //* }

// for (let person in people) {
//   console.log(person);
//   console.log(people[person]);
// }

// //! FOR - OF
// //* for (x of iterable) {
// //*   code block to be executed
// //* }

// for (let personKeys of Object.keys(people)) {
//   console.log(personKeys);
// }

// for (let v of Object.values(people)) {
//   console.log(v);
// }

// for (let v of Object.values(people)) {
//   // console.log(v.salary);
//   console.log(v["salary"]);
// }

// for (let [key, v] of Object.entries(people)) {
//   console.log(`${key} - ${v.salary}`);
// }

// // ! ARRAY METOTLARI
// console.log("*******");
// Object.keys(people).forEach((p) => console.log(p));

// Object.values(people).forEach((p) => console.log(p.surname));

// console.log("***DOB****");
// Object.values(people)
//   .filter((p) => p.job === "developer")
//   .forEach((p) => console.log(p.dob));

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
// const team = [
//   { name: "josh", surname: "adams", job: "dat", age: 30 },
//   { name: "mary", surname: "bary", job: "fsd", age: 22 },
//   { name: "hazel", surname: "nut", job: "developer", age: 20 },
// ];

// !JSON

// console.log(team);

// team.forEach((item) => console.log(item.job));

// const age = team.map((p) => console.log(p.age + 1));

// //* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
// team.forEach((person) => console.log(person.job));

// //* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
// const age = team.map((p) => p.age + 1);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

//! 111111111111
// const teamFullName = team.map((p) => ({
//   fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//   age: p.age + 5,
// }));

// console.log(teamFullName);

//! 22222222222222

// const teamFullName = team.map((p) => {
//   return {
//     fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//     age: p.age + 5,
//   };
// });
// console.log(teamFullName);

// team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));

// const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
// console.log(teamUnder22);

// const avgAges =
//   team.reduce((sum, person) => (sum += person.age), 0) / team.length;
// console.log(avgAges);
