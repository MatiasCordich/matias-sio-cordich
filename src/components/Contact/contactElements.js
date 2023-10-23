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
  color: var(--text-Green);
  text-align: center;
`;
export const ContactTitle = styled.h2`
  text-align: center;
`;
export const ContactText = styled.p`
  color: var(--text-Dark);
  max-width: 70rem;
  width: 95%;

  @media (min-width: 900px) {
    text-align: center;
  }
`;
export const ContactLink = styled.a`
  background-color: transparent;
  border: 1px solid var(--text-Green);
  padding: 1.5rem 2rem;
  color: var(--text-Green);
  font-size: 1.6rem;
  cursor: pointer;
  padding: 1.5rem 2rem;
  border-radius: 0.6rem;
  font-family: var(--title-Font);

  &:hover {
  background-color: #64ffdb4f;
  transition: all 0.8s;
}
`;
