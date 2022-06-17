import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
  return (
      <div>
        <Link to="/">
         Acceuil
        </Link>
        <Link to="about">
          À Propos
        </Link>
      </div>
  )

}

export default NavBar;
