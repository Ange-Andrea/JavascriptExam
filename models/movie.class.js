export class Movie  {

    id;
    title;
    poster_path;
    release_date;
    overview;
    image_original;
    tag_line;
    image_w500;
    constructor(movie) {
        if(movie) {
            this.id = movie.id ;
            this.title = movie.title ;
            this.poster_path = movie.poster_path ;
            this.release_date = movie.release_date ;
            this.overview = movie.overview ;
            this.tagline = movie.tagline ;
            this.image_original= "https://image.tmdb.org/t/p/original"+this.poster_path;
            this.image_w500= "https://image.tmdb.org/t/p/w500"+this.poster_path;
            
        }
       
    }

//     https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
// https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

}