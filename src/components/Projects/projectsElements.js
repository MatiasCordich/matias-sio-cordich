import styled from "styled-components";

export const ProjectBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  margin: 0 auto;
  margin-top: 5rem;
  position: relative;
  width: 95%;

  @media (min-width: 1440px) {
    width: 90%;
  }
`;
export const ProjectBoxRight = styled(ProjectBoxLeft)`
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
  }
`;
export const ImageBox = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
`;
export const ImageProject = styled.img`
  max-width: 70rem;
  width: 100%;
  height: 40rem;
  border-radius: 0.6rem;
  object-fit: cover;
`;
export const DescriptionLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 1440px) {
    width: 50%;
    position: absolute;
    align-items: flex-end;
    right: 0;
    transform: translateX(-22rem);
  }
`;
export const DescriptionRight = styled(DescriptionLeft)`
  @media (min-width: 1440px) {
    align-items: flex-start;
    text-align: left;
    left: 0;
    transform: translate(22rem, 8rem)
  }
`;
export const ProjectHeader = styled.h4`
  font-family: var(--title-Font);
  color: ${({ theme }) => theme.colors.titles.h3};
  font-size: 1.6rem;
`;
export const ProjectTitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.titles.h1};
`;
export const ProjectText = styled.p`
  background-color: ${({ theme }) => theme.colors.titles.span};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 2rem;
  line-height: 3rem;
  border-radius: 0.6rem;
  width: 100%;
`;
export const ProjectStack = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const ItemStack = styled.li`
  color: ${({ theme }) => theme.colors.titles.h1};
  font-weight: 400;
  font-size: 1.5rem;
`;
export const ProjectLinks = styled.ul`
  display: flex;
  gap: 1rem;
`;
export const LinkProject = styled.a`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.socialLink.color};

  &:hover {
    color: ${({ theme }) => theme.colors.socialLink.hoverColor};
    transition: all 0.8s;
  }
`;
