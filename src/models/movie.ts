export class Movie {
  public backdrop_path: string;
  public id: number;
  public title: string;
  public original_title: string;
  public overview: string;
  public poster_path: string;
  public media_type: string;
  public adult: string;
  public original_language: string;
  public genre_ids: number[] = [];
  public popularity: string;
  public release_date: Date;
  public video: boolean;
  public vote_average: number;
  public vote_count: number;

  constructor(
    backdrop_path: string,
    id: number,
    title: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    adult: string,
    original_language: string,
    genre_ids: number[],
    popularity: string,
    release_date: Date,
    video: boolean,
    vote_average: number,
    vote_count: number
  ) {
    this.backdrop_path = backdrop_path;
    this.id = id;
    this.title = title;
    this.original_title = original_title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.media_type = media_type;
    this.adult = adult;
    this.original_language = original_language;
    this.genre_ids = genre_ids;
    this.popularity = popularity;
    this.release_date = release_date;
    this.video = video;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}
