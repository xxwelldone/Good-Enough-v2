export class ApiClient {
    constructor() {
        this._treadingMovies = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
    }
    get treadingMovies() {
        return this.treadingMovies;
    }
    async fetchData(client) {
        try {
            const response = await fetch(client);
            const movies = await response.json();
            return movies;
        }
        catch (error) {
            throw error;
        }
    }
}
