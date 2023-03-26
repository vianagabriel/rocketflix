
const poster = document.querySelector('.poster');
const title = document.querySelector('h2');
const description = document.querySelector('p');
const divMovieInfos = document.querySelector('movie-infos');
const main = document.querySelector('main')
const containerMovies = document.querySelector('.container-movies')
const button = document.querySelector('button');
const API_KEY = '793ba6a969dcf22be3cd4d04c8e02edf';



button.addEventListener('click', async () => {
    const movieId = Math.floor(Math.random() * 500);
    const movie = await getMovie(movieId)
    renderMovie(movie)
}) 


const getMovie = async (movieId) => {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    const movieData = await movie.json();
    
    containerMovies.classList.remove('none')

    return movieData;
}

const renderMovie = (movieData) => {
    if (!movieData.poster_path) {
        poster.src = './assets/imgDefault.svg'
        title.innerHTML = 'OPS!!!'
        description.innerHTML = `Hoje não é dia de assistir filme.
        Bora codar! 🚀`;

        return;
    }

    poster.src = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
    title.innerHTML = movieData.title;
    description.innerHTML= movieData.overview;
}