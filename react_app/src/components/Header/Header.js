import React from "react";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        <a className="link" href={"/users/1/tickets"}>
          {"Home"}
        </a>
      </div>
      <div className="navbar__item">
        <a
          className="link"
          href={"https://www.linkedin.com/in/khaledbnmohamed/"}
        >
          {"More about Me :)"}
        </a>
      </div>
    </header>
  );
};

export default Header;
