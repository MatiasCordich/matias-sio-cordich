import styled from "styled-components";

export const TitleText = styled.h2`
  font-family: var(--title-Font);
  color: ${({ theme }) => theme.colors.titleSection.text};
  font-size: 4rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 1rem;
`;
export const TitleNumber = styled.span`
  color: ${({ theme }) => theme.colors.titleSection.span};
  font-size: 2rem;
  font-weight: 600;
`;

export const Line = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
    background-color: rgb(55 65 81);
    max-width: 30rem;
    width: 100%;
    height: 0.05rem;
    margin-left: 2rem;
  }
`;
