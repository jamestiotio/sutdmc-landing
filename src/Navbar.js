import React from "react";
import styled from "styled-components";

import Link from "./components/Link";

const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = styled.ul`
  width: 50vw;
  margin-top: 5vh;
  margin-left: 45vw;
  height: 60px;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  font-family: var(--font-primary);
  font-size: 2.5rem;
  color: var(--color-text);

  & > li {
  }

  & > li > a {
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 15%;
    padding-right: 15%;
    border: 2px solid;
    &:hover {
      background-color: var(--color-accent);
      color: var(--color-background);
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
  }
`;

function NavbarComp() {
  return (
    <nav>
      <Navbar>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/treasure">Treasure!</NavLink>
        </li>
        <li>
          <NavLink to="/elsewhere">Elsewhere</NavLink>
        </li>
      </Navbar>
    </nav>
  );
}

export default React.memo(NavbarComp);
