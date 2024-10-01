"use strict";
const searchSubmitBtn = document.querySelector(".search__submit");
const input = document.querySelector(".search__input");
const navbarSearchBtn = document.querySelector(".navbar__search-button");
let clickable = true;

navbarSearchBtn.addEventListener("click", (event) => {
  if (clickable) {
    input.classList.replace("input--deactive", "input--active");
    searchSubmitBtn.classList.replace("submit--deactive", "submit--active");
    clickable = false;
  } else {
    input.classList.replace("input--active", "input--deactive");
    searchSubmitBtn.classList.replace("submit--active", "submit--deactive");
    clickable = true;
  }
});
