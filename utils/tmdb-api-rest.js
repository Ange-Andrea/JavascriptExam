import {get, post} from "./http-request.js"
import {
    TMDB_TRENDING_URL,
    TMDB_CREATE_REQUEST_TOKEN,
    TMDB_CREATE_SESSION_LOGIN,
    TMDB_VALIDATE_SESSION,
    TMDB_MOVIE_DETAILS,
    TMDB_GET_ACCOUNT
} from "../config.js"

export async  function getTrendingMovies() {
    console.log("getTrendingMovies");
    return  get(TMDB_TRENDING_URL)
}

export async  function createRequestToken() {
    console.log("createRequestToken");
    return  get(TMDB_CREATE_REQUEST_TOKEN)
}


export async  function createSessionLogin(loginData) {
    return  post(TMDB_CREATE_SESSION_LOGIN, loginData)
}

export async  function validateSession(sessionToken) {
    return  post(TMDB_VALIDATE_SESSION, sessionToken)
}

export async function getMovie(id){
    return get(TMDB_MOVIE_DETAILS+id)
}

export async function getMovieReviews(id){
    return get(`${TMDB_MOVIE_DETAILS}${id}/reviews`)
}

export async function login(loginData) {
// loginData =  {username:KonnangAnge, password:Jesus@vior12}

    const request_token_data  =  await createRequestToken() ;
    if (request_token_data.request_token){
        const request_token = request_token_data.request_token;
        await createSessionLogin({...loginData, request_token});

        const sessionData = await  validateSession({request_token});
        localStorage.setItem("session_id", sessionData.session_id);
         return getAccount(sessionData.session_id);
    }
}

export async function getAccount(sessionId){
    return get(TMDB_GET_ACCOUNT+sessionId).then(accountData =>  {
        localStorage.setItem("account_data", JSON.stringify(accountData));
    });
}

export async function auth() {
    const sessionId =  localStorage.getItem("session_id");
    if(!sessionId) {
        Promise.reject("401 not authorized")
        return
    }
    try {
       return  getAccount(sessionId)
    } catch (error) {
        console.log(error);
        localStorage.removeItem("account_data");
        localStorage.removeItem("session_id")
        Promise.reject("401 not authorized")
    }
}


