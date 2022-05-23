let numberOfFilms

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


start();

const personlMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотренных фильмов?', '');
        const b = +prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' & a.length < 50) {
            personlMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personlMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов!');
    } else if (personlMovieDB.count > 9 && personlMovieDB.count < 30) {
        alert('Вы класический зритель!');
    } else if (personlMovieDB.count > 29) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personlMovieDB.privat) {
        console.log(personlMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1, i < 4, i++){
        const userAnswer = prompt(`Ваш любимый жанр ${i}`, 'Боевик');
        if (userAnswer != '' && userAnswer !== null) {
            personlMovieDB.genres.push(userAnswer);
        } else {
            i--
        }
    }
}




