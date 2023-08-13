import { LinkBox, LinkNumber, Logo, LogoContainer, MenuBtn, NavContainer, NavbarLinks, ResumeBtn } from "./navbarElements"
import { Link } from "react-scroll"
import { logo } from '../../assets/index.js'
import { motion } from 'framer-motion'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useEffect, useState } from "react"

export const Navbar = () => {

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


  return (
    <NavContainer scroll={scroll}>
      <LogoContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Logo src={logo} alt="portfolio-matias-logo" />
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
        <LinkBox open={open}>
          <Link
            activeClass='active'
            to='page1'
            spy={true}
            smooth={true}
            duration={2000}
            style={{ cursor: 'pointer' }}
            offset={-1000}
            as={motion.a}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .9, delay: 1.5 }}
            onClick={() => setOpen(!open)}>
            Home
          </Link>
        </LinkBox>
        <LinkBox open={open}>
          <Link
            activeClass='active'
            to='page2'
            spy={true}
            smooth={true}
            duration={2000}
            style={{ cursor: 'pointer' }}
            offset={-150}
            onClick={() => setOpen(!open)}
            as={motion.a}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .9, delay: 1.6 }}
          >
            <LinkNumber>01.</LinkNumber>
            Sobre mi
          </Link>
        </LinkBox>
        <LinkBox open={open}>
          <Link
            activeClass='active'
            to='page3'
            spy={true}
            smooth={true}
            duration={2000}
            style={{ cursor: 'pointer' }}
            offset={-150}
            onClick={() => setOpen(!open)}
            as={motion.a}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .9, delay: 1.7 }}
          >
            <LinkNumber>02.</LinkNumber>
            Portfolio
          </Link>
        </LinkBox>
        <LinkBox open={open}>
          <Link
            activeClass='active'
            to='page4'
            spy={true}
            smooth={true}
            duration={2000}
            style={{ cursor: 'pointer' }}
            offset={-150}
            onClick={() => setOpen(!open)}
            as={motion.a}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .9, delay: 1.8 }}
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
