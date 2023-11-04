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
    background: ${({ scroll }) => (scroll > 1.5 ? 'rgba( 255, 255, 255, .0006 )' : "transparent")};
    backdrop-filter: ${({ scroll }) => (scroll > 1.5 ? 'blur(5px)' : "none")};
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
  background:${({ theme }) => theme.colors.buttonNav.background};
  border: none;
  font-size: 2.5rem;
  padding: 1rem;

  @media (min-width: 900px) {
    display: none;
  }
`;
export const Logo = styled.img``;

export const SContent = styled.div`
  display: flex;
  align-items: center;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition-duration: 0.1s;
  gap: 0.9rem;
  color: ${({ theme }) => theme.colors.buttonMode.icon};
`;
export const SwitchBox = styled.div`
  width: 5rem;
  height: 2.7rem;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: ${({ theme }) => theme.colors.flexDirection};
  border-radius: 98rem;
  padding: 0.1rem;
  cursor: pointer;
`;

export const Switch = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color:${({ theme }) => theme.colors.buttonMode.button};
`;

export const NavbarLinks = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  background: ${({ theme }) => theme.colors.navbarLinks.background};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(6.9px);
  width: ${({ open }) => (open ? "100%" : "0")};
  height: 100vh;
  top: 0;
  z-index: 9999;
  overflow: hidden;
  transition: all 2s;

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
  gap: .3rem;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition-duration: .5s;
  transition-delay: 1s;
  color: ${({ theme }) => theme.colors.navLinks.color};
  font-weight: 600;

  @media (min-width: 900px) {
    opacity: 1;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition-delay: 1.2s;
  gap: 0.8rem;
  cursor: pointer;

  &:hover {
    color: var(--text-Green);
    transition: all 0.6s;
  }
`;
export const LinkNumber = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navLinks.numbers};
`;
export const ResumeBtn = styled.button`
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition-duration: 0.5s;

  @media (min-width: 900px) {
    opacity: 1;
  }
`;
