'user strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?', '');

let personalMovieDB = {
	'count': numberOfFilms,
	'movies': {},
	'actors': {},
	'genres': [],
	'privat': false
};

// let lastFilm = prompt('Название последнего просмотренного фильма?'), appreFilm = prompt('как вы его оцените?');

personalMovieDB.movies[prompt('Название последнего просмотренного фильма?', '')] = prompt('как вы его оцените?', '');
console.log(personalMovieDB);
