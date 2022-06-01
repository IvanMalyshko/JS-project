const personlMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personlMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personlMovieDB.count === '' || personlMovieDB.count == null || isNaN(personlMovieDB.count)) {
            personlMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотренных фильмов?', '').trim();
            const b = +prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' & a.length < 50) {
                personlMovieDB.movies[a] = b;
                console.log('done');
            } else {
                i--;
                console.log('error');
            }
        }
    },
    detectPersonalLevel: function () {
        if (personlMovieDB.count < 10) {
            alert('Просмотренно довольно мало фильмов!');
        } else if (personlMovieDB.count > 9 && personlMovieDB.count < 30) {
            alert('Вы класический зритель!');
        } else if (personlMovieDB.count > 29) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка!');
        }
    },
    showMyDB: function () {
        if (!personlMovieDB.privat) {
            console.log(personlMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            const userAnswer = prompt(`Ваш любимый жанр под номером ${i}`, 'Боевик');
            if (userAnswer != '' && userAnswer !== null) {
                personlMovieDB.genres[i - 1] = (userAnswer);
            } else {
                console.log('Вы ввели некоректные данные или не ввели их вовсе')
                i--;
            }
        }
        personlMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${personlMovieDB.genres[item]}`)
        })
    },
    toggleVisibleMyDB: function () {
        if (personlMovieDB.privat) {
            personlMovieDB.privat = false;
        } else {
            personlMovieDB.privat = true;
        }
    },
};
