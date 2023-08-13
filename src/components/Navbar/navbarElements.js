import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;

  @media (min-width: 900px) {
    position: fixed;
    top: 0;
    max-width: 220rem;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: var(--title-Font);
    font-size: 1.5rem;
    font-weight: 600;
    background: ${({ scroll }) => (scroll > 1.5 ? 'rgba(10, 25, 47, 0.65)' : "transparent")};
    backdrop-filter: ${({ scroll }) => (scroll > 1.5 ? 'blur(5px)' : "none")};
    transition: all .6s;
    padding: 2rem;
    height: fit-content;
    justify-content: space-around;
    margin: 0 auto;
    z-index: 999;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  position: relative;

  @media (min-width: 900px) {
    width: 10%;
  }
`;
export const MenuBtn = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  right: 5%;
  background:#060f1c;
  border: none;
  font-size: 2.5rem;
  padding: 1rem;

  @media (min-width: 900px) {
    display: none;
  }
`;
export const Logo = styled.img``;
export const NavbarLinks = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  background: rgba(10, 25, 47, 0.65);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.9px);
  -webkit-backdrop-filter: blur(6.9px);
  width: ${({ open }) => (open ? "100%" : "0")};
  height: 100vh;
  top: 0;
  z-index: 9999;
  overflow: hidden;
  transition: all 1s;

  @media (min-width: 900px) {
    position: relative;
    flex-direction: row;
    height: fit-content;
    align-items: center;
    justify-content: flex-end;
    font-family: var(--title-Font);
    font-size: 1.5rem;
    font-weight: 600;
    background: transparent;
    box-shadow: none;
    backdrop-filter: unset;
    width: 90%;
    height: fit-content;
    gap: 2rem;
    transition: none;
  }
`;
export const LinkBox = styled.li`
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 0.2s;

  @media (min-width: 900px) {
    opacity: 1;
  }
`;

export const Link = styled.a`
  color: var(--text-Light);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--text-Green);
    transition: all 0.6s;
  }
`;
export const LinkNumber = styled.span`
  color: var(--text-Green);
`;
export const ResumeBtn = styled.button`
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 0.2s;

  @media (min-width: 900px) {
    opacity: 1;
  }
`;
