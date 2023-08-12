import { Link, LinkBox, LinkNumber, Logo, LogoContainer, MenuBtn, NavContainer, NavbarLinks, ResumeBtn } from "./navbarElements"
import { logo } from '../../assets/index.js'
import { motion } from 'framer-motion'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

export const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logo} alt="portfolio-matias-logo" />
        <MenuBtn>
          <HiOutlineMenuAlt3 />
        </MenuBtn>

      </LogoContainer>
      <NavbarLinks>
        <LinkBox>
          <Link>Home</Link>
        </LinkBox>
        <LinkBox>
          <Link>
            <LinkNumber>01.</LinkNumber>
            About
          </Link>
        </LinkBox>
        <LinkBox>
          <Link>
            <LinkNumber>02.</LinkNumber>
            Portfolio
          </Link>
        </LinkBox>
        <LinkBox>
          <Link>
            <LinkNumber>03.</LinkNumber>
            Contact
          </Link>
        </LinkBox>
        <ResumeBtn>
          Resume
        </ResumeBtn>
      </NavbarLinks>
    </NavContainer>
  )
}
