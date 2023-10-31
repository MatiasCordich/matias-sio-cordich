import styled from "styled-components";

export const BannerBox = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 95%;
  margin: 5rem auto;
  @media (min-width: 900px) {
    margin: 20rem auto;
    width: 85%;
  }
`;
export const BannerHeadTitle = styled.h3`
  color: ${({ theme }) => theme.colors.titles.h3};
  font-weight: 600;
  margin-bottom: 2rem;
  font-family: var(--title-Font);
`;
export const BannerTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.titles.h1};

  @media (min-width: 900px) {
    font-size: 6rem;
  }
`;
export const BannerSpan = styled.span`
  color: ${({ theme }) => theme.colors.titles.span};
`;
export const BannerText = styled.p`
  max-width: 60rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  line-height: 4rem;
`;
export const BannerBtn = styled.a`
  width: 17rem;
  margin-top: 2rem;
`;

export const BannerLink = styled.div`
  cursor: pointer;
  width: 17rem;
  background: ${({ theme }) => theme.colors.proyectBtn.background};
  border: ${({ theme }) => theme.colors.proyectBtn.border};
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme.colors.proyectBtn.color};
  font-size: 1.6rem;
  border-radius: 0.6rem;
  font-family: var(--title-Font);
`;
