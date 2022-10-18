//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  #id;
  static counter = 0;
  constructor(title, author, year) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.#id = "44";
    this.getTitle = function () {
      return this.title;
    };
    Book.counter++;
  }
  //   getter methodu :değer okumayı sağlayan fonks.
  getId() {
    return this.#id;
  }

  //   setter methodu :değişkene yeni değer atayan fonks.

  setId(id) {
    this.#id = id;
  }

  #computeAge() {
    return new Date().getFullYear() - this.year;
  }

  getSummary() {
    return ` ${this.title} age's  ${this.#computeAge()}`;
  }

  static compateAge(b1, b2) {
    return `book diff. : ${b1.year - b2.year}`;
  }
}
const book1 = new Book("simyrfaacı", "Coelho", "1888");
const book2 = new Book("simyadfcı", "Coelho", "1888");
const book3 = new Book("simyacdı", "Coelvho", "1878");
const book4 = new Book("simyacdı", "Coelvho", "1978");
const book5 = new Book("simyacdı", "Coelvho", "1788");
const book6 = new Book("simyacdı", "Coelvho", "1988");

console.log(book1);
console.log(book1.title);

console.log(book1.getId());
book1.setId("11");

// console.log(book1.#computeAge());
console.log(book1.getSummary());
console.log(Book.counter);
console.log(Book.compateAge(book4, book5));
