import React from "react";
import styled from "styled-components";

import Link from "./components/Link";

const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Navbar = styled.ul`
  width: 100vw;
  height: 60px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  font-family: var(--font-primary);
  font-size: 18px;
  color: var(--color-text);

  & > li {
    height: 100%;
  }

  & > li:first-child {
    margin-left: auto;
  }

  & > li + li {
    margin-left: 50px;
  }

  & > li > a {
    &:hover {
      color: var(--color-accent);
    }

    &::selection {
      background-color: var(--color-accent);
      color: var(--color-background);
    }
  }

  @media (max-width: 896px) {
    font-size: 16px;
    justify-content: space-evenly;

    & > li:first-child {
      margin-left: 0;
    }
  }

  @media (max-width: 576px) {
    padding: 0 20px;
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
