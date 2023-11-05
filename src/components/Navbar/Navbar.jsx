import { LinkBox, LinkNumber, Logo, LogoContainer, NavContainer, NavbarLinks, ResumeBtn, SContent, Switch, SwitchBox } from "./navbarElements"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Link } from "react-scroll"
import { logo, logoL } from '../../assets/index.js'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"

import { MobileNavBox, MobileNavLinks } from "../MobileNavbar/MobileNav.jsx";


const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export const Navbar = ({ handleClick }) => {

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const savedTheme = window.localStorage.getItem('theme')

  return (
    <>
      <NavContainer scroll={scroll}>

        {/* LOGO */}
        <LogoContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {
            savedTheme === "default"
              ? <Logo src={logoL} alt="portfolio-matias-logo" />
              : <Logo src={logo} alt="portfolio-matias-logo" />
          }
        </LogoContainer>


        {/* NAVBAR LINKS */}
        <NavbarLinks >

          {/* SWITCH THEME BUTTON */}
          <SContent>
            <BsFillSunFill />
            <SwitchBox onClick={handleClick} >
              <Switch as={motion.div} layout transition={spring} />
            </SwitchBox>
            <BsFillMoonFill />
          </SContent>

          {/* LINK - HOME */}
          <LinkBox>
            <Link
              activeClass='active'
              to='page1'
              spy={true}
              smooth={true}
              duration={2000}
              style={{ cursor: 'pointer' }}
              offset={-1000}
             >
              Home
            </Link>
          </LinkBox>
          {/* LINK - ABOUT */}
          <LinkBox>
            <Link
              activeClass='active'
              to='page2'
              spy={true}
              smooth={true}
              duration={2000}
              style={{ cursor: 'pointer' }}
              offset={-150}
             
            >
              <LinkNumber>01.</LinkNumber>
              Sobre mi
            </Link>
          </LinkBox>

          {/* LINK - PROJECT */}
          <LinkBox>
            <Link
              activeClass='active'
              to='page3'
              spy={true}
              smooth={true}
              duration={2000}
              style={{ cursor: 'pointer' }}
              offset={-150}
           
            >
              <LinkNumber>02.</LinkNumber>
              Portfolio
            </Link>
          </LinkBox>

          {/* LINK - CONTACT */}
          <LinkBox>
            <Link
              activeClass='active'
              to='page4'
              spy={true}
              smooth={true}
              duration={2000}
              style={{ cursor: 'pointer' }}
              offset={-150}
           
            >
              <LinkNumber>03.</LinkNumber>
              Contacto
            </Link>
          </LinkBox>

          {/* BUTTON RESUME */}
          <ResumeBtn>
            Resume
          </ResumeBtn>
        </NavbarLinks>
      </NavContainer>

      <MobileNavBox/>

      {open && (
        <MobileNavLinks />
      )}

    </>

  )
}
