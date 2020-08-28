import React from "react";
import Movie from "../movieCard/";
import "./upcomingMoviesList.css";

const UpcomingMovieList = ({movies}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default UpcomingMovieList;