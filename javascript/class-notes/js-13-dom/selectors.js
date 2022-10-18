console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------

// const h1 = document.getElementById("header");
// console.log(h1);
// h1.style.color = "white";
// h1.style.background = "red";

//* EXAMPLE-2
//*-----------------------------------------

// const myInput = document.getElementById("input");
// const myButton = document.getElementById("button");

// myButton.style.background = "black";
// myButton.style.color = "white";
// myButton.style.width = "7rem";
// myButton.style.border = "none";
// myButton.style.borderRadius = "10px";
// myButton.style.padding = "1rem";
// myButton.style.fontSize = "1.1rem";

// myInput.style.padding = "1rem";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*EXAMPLE-3
//*-------------------------------------------

// const list = document.getElementsByTagName("li");
// console.log(list);
// list[2].style.color = "red";
// const elementThree = list.item(3);
// elementThree.style.color = "blue";
// elementThree.textContent = "react / vue 7/ angular ";

// list[4].innerText = "django / Flask";

// console.log(list[1].innerText);
// console.log(list[1].textContent);

// list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway</a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------

// const myList = document.getElementsByClassName("list");
// console.log(myList);
// console.log(myList[0].innerText);

// //? Array.from

// const myListArray = Array.from(myList);
// myListArray.forEach((item) => console.log(item.innerText));

// //? spread

// [...myList].forEach((item) => console.log(item.innerText));

// [...myList].forEach((item) => (item.style.color = "red"));

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

// //? 1- queryselector() etiket secebilir.
// const myLi = document.querySelector("li");
// console.log(myLi.innerText);
// myLi.style.color = "yellowgreen";

// //? 2- queryselector() class secebilir.

// const itemList = document.querySelector(".item-list");
// itemList.style.background = "grey";

// //? 3- queryselector() id secebilir.
// const input = document.querySelector("#input");
// console.log(input.value);

// document.querySelector("#button").style.cursor = "pointer";

// //? 4- queryselector() ile CSS deki gibi secim yapilabilir.

// const itemH2 = document.querySelector(".item-list h2");
// itemH2.style.color = "purple";

// const myBtn = document.querySelector("input[type='button']");
// console.log(myBtn);

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

// const lists = document.querySelectorAll("ul li");
// console.log(lists); //? nodelist

// lists.forEach((li) => console.log(li.innerText));

// console.log(
//   document.querySelectorAll("section ul li:nth-child(3)")[0].innerText
// );
// console.log(document.querySelector("section ul li:nth-child(3)").innerText);

// console.log("**** TRAVERSING DOM ****");
