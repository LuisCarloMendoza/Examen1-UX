import React from "react";

interface NavbarButtonProps {
  label: string;
}

const NavbarButton = ({label}:NavbarButtonProps) =>{
    return (
    <button className="navbar-button">
      {label}
    </button>

    )
}

export default NavbarButton;