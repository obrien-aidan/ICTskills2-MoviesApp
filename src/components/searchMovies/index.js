/* 
REFERENCE LINK FOR THE SEARCH MOVIES COMPONENT 
I PARTIALLY FOLLOWED THE APPROACH TAKEN IN THE FOLLOWING TUTORIAL:
 https://www.freecodecamp.org/news/learn-react-in-1-hour-by-building-a-movie-search-app/
 */
import React, {useState } from "react";
import "./searchMovies.css";
import MoviesList from "../movieList";

export default function SearchMovies() {
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [movieName, setMovieName] = useState("");

  const searchMovies = (e) => {
    setMovieName(e.target.value);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=bc495153c361987b9b8f50d7ec96ed8e&language=en-US&query=${e.target.value}&include_adult=false&page=1&region=US`;

    // eslint-disable-next-line
    const result = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row bg-dark">
        <div className="center col-md-9">
          <br></br>

          <h5s>Search Movies</h5s>
          <br></br>
          <input
            class="form-control input-lg"
            type="text"
            placeholder="Title Search"
            onChange={(event) => searchMovies(event)}
          />
          <br2></br2>
        </div>
      </div>

{/* There is a bug in this function
an error is thrown when the map is empty
i tried to implement an if/else statement to fix this 
(if movies.length==0) but I couldnt get the correct syntax */}
      {movies.map((movie) => (
        <MoviesList movies={movies} action={() => null} />
      ))}
    </>
  );
}
