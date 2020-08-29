import React, { useState } from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import FilterControls from "../filterControls";

const MovieListPageTemplate = ({ movies, title, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [orderBy, setOrderByFilter] = useState("0");
  const [releaseDate, setReleaseDate] = useState("0");
  const [ratings, setRatings] = useState("0");
  const [language, setMovieLanguage] = useState("0");

    const filterMoviesByDecade = (movie) => {
    const decadeRange = releaseDate.split("-");
    return (
      movie.release_date.split("-")[0] <= decadeRange[1] &&
      movie.release_date.split("-")[0] >= decadeRange[0]
    );
  };

  const filterMoviesByRatings = (movie) => {
    return movie.vote_average >= Number(ratings);
  };

  const filterMoviesByLanguage = (movie) => {
    return movie.original_language === language;
  };

  const genre = Number(genreFilter);
  let displayedMovies = movies
    .filter((movies) => {
      return movies.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((movies) => {
      return genre > 0 ? movies.genre_ids.includes(Number(genreFilter)) : true;
    })
    .filter((movies) => {
      return releaseDate !== "0" ? filterMoviesByDecade(movies) : true;
    })
    .filter((movies) => {
      return ratings !== "0" ? filterMoviesByRatings(movies) : true;
    })
    .filter((movies) => {
      return language !== "0" ? filterMoviesByLanguage(movies) : true;
    });

  displayedMovies.sort((a, b) => {
    switch (orderBy) {
      case "releaseDate":
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateB - dateA;
      case "popularity":
        return b.vote_average - a.vote_average;
      case "name":
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        /*return a.title.toLowerCase() - b.title.toLowerCase(); */
    }
  });

  const handleChange = (type, value) => {
    switch (type) {
      case "name":
        setNameFilter(value);
        break;
      case "orderBy":
        setOrderByFilter(value);
        break;
      case "releaseDate":
        setReleaseDate(value);
        break;
      case "ratings":
        setRatings(value);
        break;
      case "language":
        setMovieLanguage(value);
        break;
      default:
        setGenreFilter(value);
        break;
    }
  };

  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      <FilterControls
        onUserInput={handleChange}
        numMovies={displayedMovies.length}
      />
      <MovieList action={action} movies={displayedMovies} />
    </>
  );
};

export default MovieListPageTemplate;
