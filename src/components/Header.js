import React from "react";
import "./Header.css";

function Header({ headerTitle, headerImage }) {
  return (
    <div>
      <h1 className="Header-title text-center pt-4">{headerTitle}</h1>
      <img
        src={headerImage}
        className="Header-image d-block mx-auto py-3"
        alt="header img"
      />
    </div>
  );
}

export default Header;
