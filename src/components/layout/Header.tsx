import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { useTypewriter } from "../../hooks/useTypewriter";

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1`
  color: #555;
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
`;

const Nav = styled.nav`
  text-align: center;
`;

const NavList = styled.ul`
  color: #555;
  display: flex;
  font-size: 1.2em;
  list-style: none;
  justify-content: center;
  padding: 0;
`;

const NavListItem = styled.li`
  text-transform: uppercase;
  margin: 0 1em;
`;

const NavALink = styled.a`
  text-decoration: none;

  &,
  &:visited:not(:hover) {
    color: inherit;
  }

  &:hover {
    color: var(--purple);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;

  &,
  &:visited {
    color: inherit;
  }

  &:hover {
    color: var(--purple);
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Name>
        <NavLink to="/">
          <Typewriter
            onInit={(typewriter) =>
              typewriter.typeString("Ekansh Vinaik").start()
            }
          />
        </NavLink>
      </Name>
      <Nav>
        <NavList>
          <NavListItem>
            <NavLink to="/">Home</NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink to="/blog">Blog</NavLink>
          </NavListItem>
          <NavListItem>
            <NavALink href="https://docs.google.com/viewer?url=https://github.com/evinaik/resume/raw/master/resume.pdf">
              Resume
            </NavALink>
          </NavListItem>
        </NavList>
      </Nav>
    </StyledHeader>
  );
}
