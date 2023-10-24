import { LinkBox, LinkNumber, Logo, LogoContainer, MenuBtn, NavContainer, NavbarLinks, ResumeBtn, SContent, Switch, SwitchBox } from "./navbarElements"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Link } from "react-scroll"
import { logo, logoL } from '../../assets/index.js'
import { motion } from 'framer-motion'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useEffect, useState } from "react"

export const Navbar = ({ handleClick }) => {

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

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
    <NavContainer scroll={scroll}>
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
        
        <MenuBtn
          as={motion.button}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => setOpen(!open)}>
          <HiOutlineMenuAlt3 />
        </MenuBtn>
      </LogoContainer>


      <NavbarLinks open={open}>
        <SContent>
          <BsFillSunFill />
          <SwitchBox onClick={handleClick} >
            <Switch as={motion.div} layout transition={spring} />
          </SwitchBox>
          <BsFillMoonFill />
        </SContent>
        <LinkBox
          open={open}
          as={motion.li}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .5, delay: 1.5 }}
        >
          <Link
            activeClass='active'
            to='page1'
            spy={true}
            smooth={true}
            duration={2000}
            style={{ cursor: 'pointer' }}
            offset={-1000}
            onClick={() => setOpen(!open)}>
            Home
          </Link>
        </LinkBox>
        <LinkBox
          open={open}
          as={motion.li}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .5, delay: 1.6 }}>
          <Link
            activeClass='active'
            to='page2'
            spy={true}
            smooth={true}
            duration={2000}
            style={{ cursor: 'pointer' }}
            offset={-150}
            onClick={() => setOpen(!open)}
          >
            <LinkNumber>01.</LinkNumber>
            Sobre mi
          </Link>
        </LinkBox>
        <LinkBox
          open={open}
          as={motion.li}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .5, delay: 1.7 }}
        >
          <Link
            activeClass='active'
            to='page3'
            spy={true}
            smooth={true}
            duration={2000}
            style={{ cursor: 'pointer' }}
            offset={-150}
            onClick={() => setOpen(!open)}
          >
            <LinkNumber>02.</LinkNumber>
            Portfolio
          </Link>
        </LinkBox>
        <LinkBox
          open={open}
          as={motion.li}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .6, delay: 1.8 }}
        >
          <Link
            activeClass='active'
            to='page4'
            spy={true}
            smooth={true}
            duration={2000}
            style={{ cursor: 'pointer' }}
            offset={-150}
            onClick={() => setOpen(!open)}
          >
            <LinkNumber>03.</LinkNumber>
            Contacto
          </Link>
        </LinkBox>

        <ResumeBtn
          open={open}
          as={motion.button}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .5, delay: 1.9 }}
        >
          Resume
        </ResumeBtn>
      </NavbarLinks>
    </NavContainer>
  )
}
