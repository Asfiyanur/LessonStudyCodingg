console.log("**** app.js *******");

//! selectors:
const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list");

const newUl = document.createElement("ul");
langList.appendChild(newUl);

//! addBtn event handler
addBtn.addEventListener("click", () => {
  if (!langInput.value) {
    alert("please enter a language");
  } else {
    newUl.innerHTML += ` <li>${langInput.value}</li>`;
    langInput.value = "";
  }
});

//! onload event handler
deleteBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("there is no item to delete");
});

// ! enter key/delete key event handler

langInput.addEventListener("keydown", (event) => {
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.keyCode);
  //   console.log(event.code);

  if (event.keycode === 13) {
    addBtn.click();
  }
  if (event.keycode === 46) {
    deleteBtn.click();
  }
});

//! onload event handler
window.addEventListener("load", () => {
  langInput.focus();
});
