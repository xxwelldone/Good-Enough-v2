const searchSubmitBtn = document.querySelector(".search__submit");
const input = document.querySelector(".search__input");
const navbarSearchBtn = document.querySelector(".navbar__search-button");
let clickable = true;

export function mobileNavbarToggle() {
  if (
    searchSubmitBtn instanceof HTMLElement &&
    input instanceof HTMLElement &&
    navbarSearchBtn
  ) {
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
  }
}
function above768px() {
  return window.innerWidth >= 768;
}
export function setAsActive() {
  console.log(above768px());

  if (searchSubmitBtn instanceof HTMLElement && input instanceof HTMLElement) {
    if (above768px()) {
      console.log("entrou2");

      searchSubmitBtn.classList.replace("submit--deactive", "submit--active");
      input.classList.replace("input--deactive", "input--active");
    }
  }
}
