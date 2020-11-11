import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import SmallBranding from "../../Assets/Branding.png";
import NavArrow from "../../Assets/NavArrow.svg";

interface NavItem {
  Label: string;
  Link: string;
}

const Nav: React.FC = () => {
  const routeLocation = useLocation();

  const NavItems = [
    { Label: "About Me & FAQ", Link: "/AboutMe" },
    { Label: "Setup", Link: "/Setup" },
  ];

  return (
    <div className="Nav-Container">
      <nav>
        <img src={SmallBranding} alt="Small PVPX Logo" />
        <div className="NavItems">
          {NavItems.map((item: NavItem) => {
            if (routeLocation.pathname == item.Link) {
              return <Link to="/">Home</Link>;
            } else {
              return <Link to={item.Link}>{item.Label}</Link>;
            }
          })}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
