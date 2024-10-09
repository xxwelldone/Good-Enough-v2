import { ApiResponse } from "../models/apiResponse.js";
import { ApiClient } from "./apiClient.js";
import calcPercent from "../utils/calcPercent.js";

const searchInput = document.querySelector(".search__input");
const searchSubmit = document.querySelector(".search__submit");

export function search() {
  if (searchSubmit instanceof HTMLElement) {
    searchSubmit.addEventListener("pointerdown", callResults);
  }
}
async function callResults(event: PointerEvent) {
  if (searchInput instanceof HTMLInputElement) {
    if (searchInput.value !== "") {
      const search = `https://api.themoviedb.org/3/search/movie?query=${searchInput.value}&include_adult=false&language=en-US&page=1`;
      const result = await ApiClient.getData(search);
      buildResults(result);
    }
  }
}
function buildResults(result: ApiResponse) {
  const teste = document.querySelectorAll(".result__content");
  if (teste.length > 0) {
    for (let i = 0; i < teste.length; i++) {
      teste[i].remove();
    }
  }
  for (let i = 0; i < result.results.length; i++) {
    const resultArticle = document.querySelector(".result");

    const resultContent = document.createElement("div");
    resultContent.setAttribute("class", "result__content");

    const resultImg = document.createElement("img");

    resultImg.setAttribute("class", "result__image");
    resultImg.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${result.results[i].poster_path}`
    );

    const resultDetails = document.createElement("div");
    resultDetails.setAttribute("class", "result__details");

    const resultTitle = document.createElement("h2");
    resultTitle.setAttribute("class", "result__title");
    resultTitle.innerText = result.results[i].title;

    const resultOverview = document.createElement("p");
    resultOverview.setAttribute("class", "result__overview");
    resultOverview.innerText = result.results[i].overview;

    const resultRating = document.createElement("p");
    resultRating.setAttribute("class", "result__rating");
    resultRating.innerText = `${calcPercent(
      result.results[i].vote_average
    )}% Good Enough`;

    const resultLikeIcon = document.createElement("img");
    resultLikeIcon.setAttribute("class", "film__like-icon");
    resultLikeIcon.setAttribute("src", "/public/imgs/like.svg");
    resultLikeIcon.setAttribute("alt", "Like icon");

    resultDetails.append(
      resultTitle,
      resultRating,
      resultLikeIcon,
      resultOverview
    );
    resultContent.append(resultImg, resultDetails);
    resultArticle?.append(resultContent);
  }
}
