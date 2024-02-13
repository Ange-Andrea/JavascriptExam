export const LANG = 'fr-FR'

export const API_AUTH_KEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDhiNTQ0ZDdlNDY5OGM1N2UxZGNkM2EwZjY3ZmI0YyIsInN1YiI6IjY1YjI2MGUxYTgwMjM2MDE1MGFlOTNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VeKAPblGvLy8Os7EgtTQz-NMRowi0B0zFzX6Wr3DfDU"

export const TMDB_URL = "https://api.themoviedb.org/3/"

export const TMDB_TRENDING_URL = `${TMDB_URL}trending/movie/day?language=${LANG}`

// https://api.themoviedb.org/3/movie/movie_id/reviews
export const TMDB_MOVIE_DETAILS = `${TMDB_URL}movie/`


// https://api.themoviedb.org/3/authentication/token/new
export const TMDB_CREATE_REQUEST_TOKEN = `${TMDB_URL}authentication/token/new`

// https://api.themoviedb.org/3/authentication/token/validate_with_login
export const TMDB_CREATE_SESSION_LOGIN = `${TMDB_URL}authentication/token/validate_with_login`

// https://api.themoviedb.org/3/authentication/session/new
export const TMDB_VALIDATE_SESSION = `${TMDB_URL}authentication/session/new`

// https://api.themoviedb.org/3/account?session_id
export const TMDB_GET_ACCOUNT = `${TMDB_URL}account?session_id=`

