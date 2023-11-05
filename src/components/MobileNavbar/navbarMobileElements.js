import styled from "styled-components";
import { NavbarLinks } from "../Navbar/navbarElements";

export const MobileNavMenu = styled.nav`
  width: 100%;
  height: 10rem;
  display: flex;
  padding: 1rem;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const MenuBtn = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 5rem;
  z-index: 9999999;
  right: 5%;
  background: ${({ theme }) => theme.colors.buttonNav.background};
  border: none;
  font-size: 2.5rem;
  padding: 1.5rem;
  margin: 2rem;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const LinksMobile = styled.ul`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rebeccapurple;

  @media (min-width: 900px) {
      display: none;
  }
`

