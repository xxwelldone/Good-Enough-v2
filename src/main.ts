import { ApiClient } from "./Services/apiClient.js";
import { mobileNavbarToggle, setAsActive } from "./Services/hiddenBtn.js";

import { addMoviesHomescreen } from "./Services/homeMovies.js";
import { search } from "./Services/searchResult.js";

mobileNavbarToggle();
setAsActive();
const top4 = await ApiClient.getData(
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
);
addMoviesHomescreen(top4);
search();
