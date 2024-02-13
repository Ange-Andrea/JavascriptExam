// script.js
import {API_AUTH_KEY} from "../config.js"
document.addEventListener('DOMContentLoaded', function () {
    // Your TMDb API key
    
    const apiKey = API_AUTH_KEY;

    function searchMovie() {
        const movieTitle = document.getElementById('movie-title').value;

        if (movieTitle.trim() === '') {
            alert('Please enter a movie title.');
            return;
        }

        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(movieTitle)}&page=1&include_adult=false`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const movie = data.results[0]; // Assuming the first result is the desired movie
                if (movie) {
                    // Redirect to movie.html with movie details as query parameters
                    window.location.href = `movie.html?id=${movie.id}&title=${encodeURIComponent(movie.title)}`;
                } else {
                    alert('Movie not found');
                }
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }

    // Expose the searchAndRedirect function for button click
    window.searchMovie = searchMovie;
});
