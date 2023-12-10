const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestion = prompt("Один из послених просмотренных фильмов?", ""),
      secondQuestion = prompt("Насколько оцените его?", ""),
      thirdQuestion = prompt("Один из послених просмотренных фильмов?", ""),
      fourthQuestion = prompt("Насколько оцените его?", "");

personalMovieDB.movies[firstQuestion] = secondQuestion;
personalMovieDB.movies[thirdQuestion] = fourthQuestion;

console.log(personalMovieDB);