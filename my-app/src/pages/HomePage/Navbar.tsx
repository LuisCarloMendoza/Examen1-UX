import React from "react";
import NavbarButtons from "../Components/NavbarButtons";
import NavbarIcons from "../Components/NavbarIcons";

const Navbar = () => {
    return(
      <nav className="navbar">
      <div className="container-fluid">
        {}
        <div className="d-flex align-items-center">
          <img src="/Images/NetflixLogo.png" alt="Netflix" className="navbar-logo" />
          <NavbarButtons />
        </div>
        {}
        <NavbarIcons />
      </div>
    </nav>

    )
}

export default Navbar;






