import { Movie } from "../models/movie";

export class ApiClient {
  private _treadingMovies: string =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  public get treadingMovies(): string {
    return this.treadingMovies;
  }
  public async fetchData(client: string): Promise<Movie[]> {
    try {
      const response = await fetch(client);
      const movies: Movie[] = await response.json();
      return movies;
    } catch (error) {
      throw error;
    }
  }
}
