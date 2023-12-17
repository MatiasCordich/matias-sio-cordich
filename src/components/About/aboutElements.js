import styled from "styled-components";

export const AboutBox = styled.section``;
export const AboutContent = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 5rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const AboutTexts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  

  @media (min-width: 1200px) {
    width: 55%;
  }
`;
export const TextBox = styled.li``;
export const Text = styled.p`
  line-height: 4rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
`;
export const SpanText = styled.span`
  color: ${({ theme }) => theme.colors.checkIcon.color};
  font-weight: 700;
`;
export const LineAbout = styled.div`
  background-color: rgb(55 65 81);
  width: 80%;
  height: 0.05rem;
`;

export const TechStack = styled.ul`
    display: grid;
    row-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    color: ${({ theme }) => theme.colors.text};
    font-weight: 200;

    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
        width: 90%;
    }
`
export const TechItem = styled.li`
    display: flex;
    align-items: center;
    gap: .3rem;
    font-size: 1.6rem;
`

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: .3rem;
  color: ${({ theme }) => theme.colors.checkIcon.color};
`
export const AboutImage = styled.div`
    display: flex;
    justify-content: center;
`
export const Image = styled.img`
    background-color: ${({ theme }) => theme.colors.image.background};
    border-radius: 100%;
    object-fit: cover;
    max-width: 40rem;
    width: 95%;
    max-height: 40rem;

`
