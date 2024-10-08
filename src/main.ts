import { ApiClient } from "./Services/apiClient.js";
import mobileNavbarToggle from "./Services/hiddenBtn.js";
import { addMoviesHomescreen } from "./Services/homeMovies.js";

mobileNavbarToggle();
const result = await ApiClient.getData(
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
);
addMoviesHomescreen(result);
