import React from "react";
import styled from "styled-components";

import Link from "./components/Link";
import "./Navbar.css"

const NavLink = styled(Link)``;

const Navbar = styled.ul`
  width: 50vw;
  margin-left: 45vw;
  height: 60px;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  font-family: var(--font-primary);
  font-size: 2.5rem;
  color: var(--color-text);
  & > li {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > li > a {
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 15%;
    padding-right: 15%;
    &:hover {
      color: var(--color-accent);
    }

    &::selection {
      background-color: var(--color-accent);
      color: var(--color-background);
    }
  }
  & > li > div > a {
    &:hover {
      color: var(--color-accent);
    }

    &::selection {
      background-color: var(--color-accent);
      color: var(--color-background);
    }
  }

  @media (max-width: 896px) {
    width: 100vw;
    margin: 0;
    font-size: 16px;
    justify-content: space-evenly;
  }
`;

const NavElement = styled.nav`
  padding-top: 5vh;

  @media (max-width: 896px) {
    padding-top: 0;
  }
`;

function NavbarComp() {
  return (
    <NavElement>
      <Navbar>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-dropdown">
          <NavLink to="/games">Games</NavLink>
          <div class="nav-dropdown-content">
            <NavLink to="/epd">EPD</NavLink>
            <NavLink to="/esd">ESD</NavLink>
            <NavLink to="/istd">ISTD</NavLink>
          </div>
        </li>
        <li className="nav-dropdown">
          <NavLink to="/projects">Projects</NavLink>
          <div class="nav-dropdown-content">
            <NavLink to="/project1">Project&nbsp;1</NavLink>
            <NavLink to="/project2">Project&nbsp;2</NavLink>
            <NavLink to="/project3">Project&nbsp;3</NavLink>
          </div>
        </li>
        <li>
          <a href="https://opensutd.org/minecraft-gallery/">Gallery</a>
        </li>
        <li>
          <NavLink to="/elsewhere">Elsewhere</NavLink>
        </li>
      </Navbar>
    </NavElement>
  );
}

export default React.memo(NavbarComp);
