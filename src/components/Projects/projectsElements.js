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
  height: auto;
  object-fit: cover;
  border-radius: 0.6rem;
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
  color: var(--text-Green);
  font-size: 1.6rem;
`;
export const ProjectTitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 700;
`;
export const ProjectText = styled.p`
  background-color: #112240;
  font-size: 1.5rem;
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
  color: var(--text-Dark);
`;
export const ProjectLinks = styled.ul`
  display: flex;
  gap: 1rem;
`;
export const Links = styled.a`
  font-size: 2.2rem;
  color: var(--text-Light);
`;
