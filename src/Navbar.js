import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    margin-left: 30px;
  }

  & > li > a:hover {
    color: var(--color-accent);
  }

  @media (max-width: 896px) {
    font-size: 16px;
    justify-content: space-evenly;

    & > li:first-child {
      margin-left: 0;
    }
  }

  @media (max-width: 414px) {
    font-size: 12px;
    padding: 0 20px;
  }
`;

const StyledLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

function NavbarComp({ setMining }) {
  return (
    <nav>
      <Navbar>
        <li>
          <StyledLink
            to="/"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            Main
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/contribute"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            Contribute
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/changelog"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            Changelog
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/elsewhere"
            onMouseEnter={() => setMining(true)}
            onMouseLeave={() => setMining(false)}
          >
            Elsewhere
          </StyledLink>
        </li>
      </Navbar>
    </nav>
  );
}

export default NavbarComp;
