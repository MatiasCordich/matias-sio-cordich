import styled from 'styled-components'

export const NavContainer = styled.nav`
    width: 100%;
    @media (min-width: 900px) {
        display: flex;
        align-items: center;
        font-family: var(--title-Font);
        font-size: 1.5rem;
        font-weight: 600;
        width: 95%;
        height: 10rem;
        justify-content: space-around;
        margin: 0 auto;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 95%;
    margin: 0 auto;
`
export const MenuBtn = styled.button`
    border: none;
    font-size: 3.5rem;

    @media (min-width: 900px) {
        display: none;
    }
`
export const Logo = styled.img``
export const NavbarLinks = styled.ul`
    display: none;

    @media (min-width: 900px) {
        display: flex;
        align-items: center;
        font-family: var(--title-Font);
        font-size: 1.5rem;
        font-weight: 600;
        gap: 2rem;
    }
`
export const LinkBox = styled.li``

export const Link = styled.a`
    color: var(--text-Light);
    display: flex;
    align-items: center;
    gap: .8rem;
    cursor: pointer;

    &:hover{
        color: var(--text-Green);
        transition: all .6s;
    }
`
export const LinkNumber = styled.span`
    color: var(--text-Green);
`
export const ResumeBtn = styled.button``