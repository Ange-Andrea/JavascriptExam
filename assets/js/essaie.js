
const API_KEY = "api_key=95bc385c96ed0b96675554ec71f35a9d";
const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL = `${BASE_URL}/search/movie?${API_KEY}&language=fr-FR&query=`;

const searchInput = document.getElementById("search-input");
const main = document.getElementById("main");

let currentPage = 1;
let isLoading = false;

async function searchMovies(query, page) {
  const response = await fetch(
    `${SEARCH_URL}${encodeURIComponent(query)}&page=${page}`
  );
  const data = await response.json();
  return data.results;
}

function displayMovies(movies) {
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `

            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <a href="movie.html?id=${movie.id}" class="more-info w3-button w3-black w3-margin-bottom"> En savoir plus </a>
            </div>
        `;
    main.appendChild(movieElement);
  });
}

async function loadMoreResults() {
  if (!isLoading) {
    isLoading = true;
    currentPage++;
    const query = searchInput.value.trim();
    const additionalMovies = await searchMovies(query, currentPage);
    displayMovies(additionalMovies);
    isLoading = false;
  }
}

async function searchAndDisplayMovies() {
  currentPage = 1;
  const query = searchInput.value.trim();
  if (query !== "") {
    main.innerHTML = "";
    const movies = await searchMovies(query, currentPage);
    displayMovies(movies);
  } else {
    main.innerHTML = "";
  }
}

// Fonction pour charger plus de films lorsque l'utilisateur atteint le bas de la page
function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreResults();
  }
}

// Ajout de l'événement de défilement
window.addEventListener("scroll", handleScroll);

// Initialisation de la recherche lorsque l'utilisateur saisit quelque chose dans la barre de recherche
searchInput.addEventListener("input", searchAndDisplayMovies);
