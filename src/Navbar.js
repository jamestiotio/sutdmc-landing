import React from "react";
import styled from "styled-components";

import Link from "./components/Link";

const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Navbar = styled.ul`
  width: 50vw;
  margin-left: 45vw;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  font-family: var(--font-primary);
  font-size: 18px;
  color: var(--color-text);

  & > li {
    height: 100%;
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
