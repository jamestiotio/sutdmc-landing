import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Link from "./components/Link";
import menu from './assets/images/menu.png';
//import HeroImage from "./HeroImage";

const NavLink = styled(Link)``;

const Navbar = styled.ul`
  width: 50vw;
  margin-left: 45vw;
  height: 45px;
  display: flex;
  align-self: center;
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
    margin-left: 0;
    padding-left: 5%;
    padding-right: 5%;
    flex: 1;
    font-size: 20px;
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

const NavDropdownContentDiv = `
  display: none;
  position: absolute;
  background-color: #fff;
  z-index: 1;
  left: 0;
  top: 45px;
  min-width: 100%;

  & > ul > li {
    height: 30px;
    padding: 0 10px;
    color: black;
    display: flex;
    align-items: center;

    &:hover {
      color: var(--color-accent);
    }
  }

  & > ul > li > div > ul > li {
    height: 30px;
    padding: 0 5px 0 15px;
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

const NavDropdownContent = styled.div`
  ${NavDropdownContentDiv}
`;
const NavDropdownContent2 = styled.div`
  ${NavDropdownContentDiv}
  top: 30px;
`;

const NavDropdown = styled.li`
  position: relative;

  @media (min-width: 897px) {
    &:hover ${NavDropdownContent} {display: block;}
  }
`;

const NavDropdown2 = styled.li`
  position: relative;

  @media (min-width: 897px) {
    &:hover ${NavDropdownContent2} {display: block;}
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

  & > li {
    margin-left: 10px;
  }

  & li {
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
    z-index: 2;
  }
`

const NavbarComp = ({ blockCount, setBlockCount }) => {
  const [isOpened, setIsOpened] = useState(false);

  function expandNav() {
    if (!isOpened) { setIsOpened(true) }
  }

  useEffect(() => {
    function resize() {
      const minWidth = window.innerWidth > 896;
      if (minWidth && isOpened) setIsOpened(false);
    }

    function click() {
      if (isOpened) { setIsOpened(false) }

    }
    if (isOpened) {
      window.addEventListener("resize", resize);
      document.addEventListener("click", click);
    }

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", click);
    };
  }, [isOpened]);

  const navDropdownArchives = (<ul>
    <li><NavLink to="/oh2020">Open&nbsp;House&nbsp;2020</NavLink></li>
    <li><NavLink to="/asd2020">ASD Projects</NavLink></li>
  </ul>);

  const navDropdownEvents = (<ul>
    <li><NavLink to="/oh2021">Open&nbsp;House&nbsp;2021</NavLink></li>
    <NavDropdown2>
      <div>Archives</div>
      <NavDropdownContent2>
        {navDropdownArchives}
      </NavDropdownContent2>
    </NavDropdown2>
  </ul>)

  const navList = (<>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/campus">Campus</NavLink>
    </li>

    {isOpened ?
    <>
      <li><NavLink to="/">Events</NavLink></li>
      <div style={{marginLeft: "25px"}}>
        {navDropdownEvents}
      </div>
      <div style={{marginLeft: "50px"}}>
        {navDropdownArchives}
      </div>
    </> :
    <>
      <NavDropdown>
        <NavLink to="/">Events</NavLink>
        <NavDropdownContent>
          {navDropdownEvents}
        </NavDropdownContent>
      </NavDropdown>
    </>
    }
    {/* <li>
      <a href="https://opensutd.org/minecraft-gallery/">Gallery</a>
    </li> */}
    <li>
      <NavLink to="/about">About&nbsp;Us</NavLink>
    </li>
    <li>
      <NavLink to="/elsewhere">Elsewhere</NavLink>
    </li>
  </>)

  const Logo = styled.img`
    margin-left: 32px;
    width: 72px;
    height: 72px;

    @media (max-width: 896px) {
      margin-left: 0;
      padding-top: 3px;
      width: 42px;
      height: 42px;
    }
  `;

  return (
    <NavElement>
      {/* <HeroImage blockCount={blockCount} setBlockCount={setBlockCount} /> */}
      <Logo src={require('./assets/images/site-logo.png')}></Logo>
      {isOpened ?
        <Navbar><NavExpanded>{navList}</NavExpanded></Navbar>
      :
        <Navbar>{navList}</Navbar>
      }
      <Hamburger src={menu} alt="" width="30" height="30" onClick={expandNav}></Hamburger>
    </NavElement>
  );
}

export default React.memo(NavbarComp);
