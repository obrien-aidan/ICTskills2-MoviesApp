/* STYLE REFERENCE:
https://react-bootstrap.github.io/components/buttons/ */

import React from "react";

const Header = ({ title, numMovies }) => {
  return (
    <div className="col-md-6">

  <button type="button" class="btn btn-primary">
  {`${title}  `} <span class="badge badge-light">{numMovies}</span>
</button>
<br></br>
</div>

  );
};

export default Header;

