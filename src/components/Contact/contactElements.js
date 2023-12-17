import styled from "styled-components";
import { ResumeBtn } from "../Navbar/navbarElements";

export const ContactBox = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: 900px) {
  }
`;
export const ContactHead = styled.h4`
  color: ${({ theme }) => theme.colors.titles.h3};
  text-align: center;
`;
export const ContactTitle = styled.h2`
  color: ${({ theme }) => theme.colors.titles.h1};
  text-align: center;
`;
export const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  max-width: 70rem;
  font-weight: 500;
  width: 95%;

  @media (min-width: 900px) {
    text-align: center;
  }
`;
export const ContactLink = styled.a`
  background-color: ${({ theme }) => theme.colors.buttonResume.background};
  border: ${({ theme }) => theme.colors.buttonResume.border};
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme.colors.buttonResume.color};
  padding: 1.5rem 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 0.6rem;
  font-family: var(--title-Font);

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonResume.hover};
  transition:${({ theme }) => theme.colors.buttonResume.transition};
  }
`;
