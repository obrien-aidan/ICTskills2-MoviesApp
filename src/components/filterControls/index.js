import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from "../../contexts/genresContext";

const FilterControls = (props) => {
  const context = useContext(GenresContext);
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };
  const handleOrderByChange = (e) => {
    handleChange(e, "orderBy", e.target.value);
  };
  const handleReleaseDateFilter = (e) => {
    handleChange(e, "releaseDate", e.target.value);
  };
  const handleRatingFilter = (e) => {
    handleChange(e, "ratings", e.target.value);
  };
  const handleMovieLanguageFilter = (e) => {
    handleChange(e, "language", e.target.value);
  };

  return (
    <div className="row bg-dark">
      <div className="center col-md-9">
        <br></br>
        <h5>Search</h5>

        <input
          class="form-control input-sm"
          type="text"
          placeholder="Title Search"
          onChange={handleTextChange}
        />
        <h5>Genre</h5>
        <select id="genre" onChange={handleGenreChange}>
          {context.genres.map((genre) => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>

        <h5>Release Date</h5>
        <select name="year" onChange={handleReleaseDateFilter}>
          <option value="0">All</option>
          <option value="2010-2020">2010-2020</option>
          <option value="2000-2009">2000-2009</option>
          <option value="1990-1999">1990-1999</option>
          <option value="1980-1989">1980-1989</option>
          <option value="1970-1979">1970-1979</option>
          <option value="1900-1969">1900-1969</option>
        </select>
        <h5>Ratings</h5>
        <select name="rating" onChange={handleRatingFilter}>
          <option value="0">All</option>
          <option value="9">9+</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
          <option value="6">6+</option>
          <option value="5">5+</option>
          <option value="4">4+</option>
          <option value="3">3+</option>
          <option value="2">2+</option>
          <option value="1">1+</option>
        </select>
        <h5>Language</h5>
        <select id="length" onChange={handleMovieLanguageFilter}>
          <option key="0" value="0">
            All
          </option>
          <option key="english" value="en">
            English
          </option>
          <option key="french" value="ru">
            Russian
          </option>
          <option key="japanese" value="ja">
            Japanese
          </option>
          <option key="korean" value="ko">
            Korean
          </option>
        </select>
        <h5>Order By</h5>
        <select id="orderBy" onChange={handleOrderByChange}>
          <option key="releaseDate" value="releaseDate">
            Release Date
          </option>
          <option key="popularity" value="popularity">
            Popularity
          </option>
          <option key="name" value="name">
            Name
          </option>
        </select>
        <br></br>
      </div>
    </div>
  );
};

export default FilterControls;
