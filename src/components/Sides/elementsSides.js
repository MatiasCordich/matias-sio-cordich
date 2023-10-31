import styled from "styled-components";

/* LeftSide */
export const LeftSideBox = styled.aside`
  display: none;

  @media (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    width: 5%;
    height: 100svh;
    position: relative;
  }
`;

export const LeftSideLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export const Link = styled.li``;

export const SocialLink = styled.a`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.socialLink.color};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.socialLink.hoverColor};
    transition: all 0.8s;
  }
`;
/* MiddleSide */
export const MiddleSideBox = styled.main`
  width: 95%;
  margin: 0 auto;

  @media (min-width: 1080px) {
    width: 90%;
  }
`;

/* RightSide */
export const RightSideBox = styled.aside`
  display: none;

  @media (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    width: 5%;
    height: 100svh;
    
  }
`;

export const EmailLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: 14rem;
  align-items: center;
  position: fixed;
  width: 5%;
  bottom: 0;
  cursor: pointer;
  color:${({ theme }) => theme.colors.emailLink.color};;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.emailLink.hoverColor};
    transition: all 1s;
  }
  
`;

export const TextLink = styled.p`
    width: fit-content;
    transform: rotate(90deg);
    letter-spacing: .4rem;
    font-size: 1.5rem;
`;

/* Miscelaneous */

export const AsideLine = styled.div`
  width: 0.2rem;
  height: 20rem;
  background-color: var(--text-Dark);
`;
