//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

// todo: html de ki olayları sıralamadan bağımsız gerşekleşiyor,kullanıcı etkisiyle eventleri browser çağırıyor.Eventler: on:click/load,onmouse:over/out,on:change/submit/keyup

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

// document.querySelector("#header h1").onmouseover = function () {};

// todo: 3 .method:

const h1 = document.querySelector("#header h1");
h1.onmouseover = function () {
  h1.style.color = "red";
  h1.style.fontWeight = "300";
};
h1.onmouseout = function () {
  h1.style.color = "black";
  h1.style.fontWeight = "900";
};

// todo: 4 .method:

h1.addEventListener("click", () => {
  alert("h1 pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  //   if (!input.value) {
  //     alert("please enter an item");
  //   } else {
  //     alert(`${input.value} entered `);
  //   }

  !input.value
    ? alert("please enter an item")
    : alert(`${input.value} entered `);

  input.value = "";
});

//* EXAMPLE-3
//* -------------------------------------------------

const list = document.querySelectorAll(".list");

list.forEach((li) => {
  li.style.transition = "all 1s";
  li.style.lineHeight = "2rem";

  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translatex(10px)";
  };

  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transform = "translatex(-10px)";
  };
});

console.log(list);

//* EXAMPLE-4
//* -------------------------------------------------

window.onload = function () {
  document.querySelector("#input").focus();
};
