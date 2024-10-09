import calcPercent from "../utils/calcPercent.js";
export function addMoviesHomescreen(result) {
    console.log("entrou");
    for (let i = 0; i < 4; i++) {
        const filmArticle = document.querySelector(".film");
        const filmContent = document.createElement("div");
        filmContent.setAttribute("class", "film__content");
        const filmImg = document.createElement("img");
        filmImg.setAttribute("class", "film__image");
        filmImg.setAttribute("src", `https://image.tmdb.org/t/p/w500${result.results[i].poster_path}`);
        const filmDetails = document.createElement("div");
        filmDetails.setAttribute("class", "film__details");
        const filmTitle = document.createElement("h2");
        filmTitle.setAttribute("class", "film__title");
        filmTitle.innerText = result.results[i].title;
        const filmRating = document.createElement("p");
        filmRating.setAttribute("class", "film__rating");
        filmRating.innerText = `${calcPercent(result.results[i].vote_average)}% Good Enough`;
        const filmLikeIcon = document.createElement("img");
        filmLikeIcon.setAttribute("class", "film__like-icon");
        filmLikeIcon.setAttribute("src", "/public/imgs/like.svg");
        filmLikeIcon.setAttribute("alt", "Like icon");
        filmDetails.append(filmTitle, filmRating, filmLikeIcon);
        filmContent.append(filmImg, filmDetails);
        filmArticle === null || filmArticle === void 0 ? void 0 : filmArticle.append(filmContent);
    }
}
