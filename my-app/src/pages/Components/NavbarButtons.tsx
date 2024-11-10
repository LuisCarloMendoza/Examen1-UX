import React from "react";
import NavbarButton from "./NavbarButton";

const NavbarButtons = () =>{
    return(
    <div className="navbar-buttons d-none d-lg-flex"> {}
      <NavbarButton label="Home" />
      <NavbarButton label="TV Shows" />
      <NavbarButton label="Movies" />
      <NavbarButton label="New & Popular" />
      <NavbarButton label="My List" />
    </div>
    )
}

export default NavbarButtons;