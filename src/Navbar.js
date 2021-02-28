import React, { useState } from 'react';
import styled from "styled-components";

import Link from "./components/Link";
import block from './assets/images/block.png';

const NavLink = styled(Link)``;

const Navbar = styled.ul`
  width: 50vw;
  margin-left: 45vw;
  margin-top: 15px;
  height: 45px;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  font-family: var(--font-primary);
  font-size: 2.5rem;
  color: var(--color-text);
  & > li {
    margin-left: 10px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  & a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
      color: var(--color-accent);
    }

    &::selection {
      background-color: var(--color-accent);
      color: var(--color-background);
    }
  }
  & > li > div > li {
    &:hover {
      color: var(--color-accent);
    }

    &::selection {
      background-color: var(--color-accent);
      color: var(--color-background);
    }
  }

  @media (max-width: 896px) {
    width: 70%;
    margin-left: 0;
    padding-right: 10%;
    margin-top: 15px;
    flex: 1;
    font-size: 16px;
    justify-content: space-between;

    & > li:nth-last-child(-n+2) {
      display: none;
    }
  }
`;

const NavElement = styled.nav`
  padding-top: 5vh;
  display: flex;

  @media (max-width: 896px) {
    padding-top: 0;
    margin: 0 auto;
    width: 90%;
  }
`;

const NavDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  z-index: 1;
  top: 45px;
  min-width: 100%;

  & li {
    height: 30px;
    padding: 0 5px;
    color: black;
    display: block;

    &:hover {
      color: var(--color-accent);
    }
  }

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const NavDropdown = styled.li`
  position: relative;

  @media (min-width: 897px) {
    &:hover ${NavDropdownContent} {display: block;}
  }
`;

const NavExpanded = styled.div`
  z-index: 1;
  width: 100%;
  height: fit-content;
  font-family: var(--font-primary);
  color: var(--color-text);
  background-image: linear-gradient(#333, #333);
  background-color: #000;

  & li {
    margin-left: 10px;
    height: 45px;
    display: flex;
    align-items: center;

    &:hover {
      color: var(--color-accent);
    }
  }

  & a {
    height: 100%;
    width: 100%;
  }
`

const Hamburger = styled.img`
  display: none;

  @media (max-width: 896px) {
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 15px;
    z-index: 2;
  }
`

function NavbarComp() {
  const [isOpened, setIsOpened] = useState(false);

  function expandNav() {
    setIsOpened(isOpened => !isOpened);
  }

  function closeNav() {
    console.log("here")
    setIsOpened(isOpened => !isOpened);
  }

  const navDropdownGames = (<ul>
    <li><NavLink to="/epd">EPD</NavLink></li>
    <li><NavLink to="/esd">ESD</NavLink></li>
    <li><NavLink to="/istd">ISTD</NavLink></li>
  </ul>)

  const navDropdownProjects = (<ul>
    <li><NavLink to="/project1">Project&nbsp;1</NavLink></li>
    <li><NavLink to="/project2">Project&nbsp;2</NavLink></li>
    <li><NavLink to="/project3">Project&nbsp;3</NavLink></li>
  </ul>)

  const navList = (<>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    {isOpened ?
      <>
        <li><NavLink to="/games">Games</NavLink></li>
        <div style={{marginLeft: "35px"}}>
          {navDropdownGames}
        </div>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <div style={{marginLeft: "35px"}}>
          {navDropdownProjects}
        </div>
      </>
    :
      <>
        <NavDropdown>
          <NavLink to="/games">Games</NavLink>
          <NavDropdownContent>
            {navDropdownGames}
          </NavDropdownContent>
        </NavDropdown>
        <NavDropdown>
          <NavLink to="/projects">Projects</NavLink>
          <NavDropdownContent>
            {navDropdownProjects}
          </NavDropdownContent>
        </NavDropdown>
      </>
    }
    <li>
      <a href="https://opensutd.org/minecraft-gallery/">Gallery</a>
    </li>
    <li>
      <NavLink to="/elsewhere">Elsewhere</NavLink>
    </li>
  </>)

  return (
    <NavElement>
      {isOpened ?
        <Navbar><NavExpanded onClick={closeNav}>{navList}</NavExpanded></Navbar>
      :
        <Navbar>{navList}</Navbar>
      }
      <Hamburger src={block} alt="" width="30" height="30" onClick={expandNav}></Hamburger>
    </NavElement>
  );
}

export default React.memo(NavbarComp);
