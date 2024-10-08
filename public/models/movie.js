export class Movie {
    constructor(backdrop_path, id, title, original_title, overview, poster_path, media_type, adult, original_language, genre_ids, popularity, release_date, video, vote_average, vote_count) {
        this.genre_ids = [];
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
