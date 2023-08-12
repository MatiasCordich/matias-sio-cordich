import styled from 'styled-components'

export const BannerBox = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 95%;
    margin: 5rem auto;
    @media (min-width: 900px) {
        margin: 10rem auto;
        width: 85%;
    }
`
export const BannerHeadTitle = styled.h3`
    color: var(--text-Green);
    font-weight: 300;
    margin-bottom: 2rem;
    font-family: var(--title-Font);
`
export const BannerTitle = styled.h1`
    display: flex;
    flex-direction: column;
    font-size: 4rem;

    @media (min-width: 900px) {
        font-size: 6rem;
    }
`
export const BannerSpan = styled.span`
    color: var(--text-Dark);
`
export const BannerText = styled.p`
    max-width: 60rem;
    width: 100%;
    color: var(--text-Dark);
    line-height: 4rem;
`
export const BannerBtn = styled.button`
    width: 17rem;
    margin-top: 2rem;
`