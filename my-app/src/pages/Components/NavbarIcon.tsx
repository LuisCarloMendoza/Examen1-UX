import React from "react";


interface ProfileIconProps {
  src: string;
  alt: string;
}

const NavbarIcon = ({src,alt}:ProfileIconProps) => {
    return(
    <img
      src={src}
      alt={alt}
      className="navbar-icon"
    />
    )
}

export default NavbarIcon;