import React from "react";
import NavbarIcon from "./NavbarIcon";

const NavbarIcons = () => {
    return(
    <div className="navbar-icons d-flex align-items-center gap-3">
      <NavbarIcon src="/Images/SearchIcon.png" alt="SearchBar" />
      <NavbarIcon src="/Images/NotificationIcon.png" alt="Notifications" />
      <NavbarIcon src="/Images/ProfileIcon.png" alt="Profile" />
    </div>

    )
}

export default NavbarIcons;