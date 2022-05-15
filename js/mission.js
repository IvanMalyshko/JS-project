const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')


const personlMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};
const a = prompt('Один из просмотренных фильмов?', '');
const b = +prompt('На сколько оцените его?', '');
const c = prompt('Один из просмотренных фильмов?', '');
const d = +prompt('На сколько оцените его?', '');

personlMovieDB.movies[a] = b;
personlMovieDB.movies[c] = d;
console.log(personlMovieDB);



