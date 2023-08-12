import styled from 'styled-components'

export const S_LayoutBox = styled.section`
   
    width: 95%;
    margin: 0 auto;
    margin-top: 25rem;

    @media (min-width: 1080px) {
        width: 85%;
    }
`

export const L_LayoutBox = styled(S_LayoutBox)`
    width: 95%;
    margin: 0 auto;
    margin-top: 25rem;

    @media (min-width: 1080px) {
        width: 100%;
    }

`