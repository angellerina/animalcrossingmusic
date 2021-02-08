import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import friends from "../pictures/friends.png";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <img className="logo" src={friends} alt="" />
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
