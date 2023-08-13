import { Link, LinkBox, LinkNumber, Logo, LogoContainer, MenuBtn, NavContainer, NavbarLinks, ResumeBtn } from "./navbarElements"
import { logo } from '../../assets/index.js'
import { motion } from 'framer-motion'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useState } from "react"

export const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState(false)

  const changeBackground = () => {
    if (window.screenY >= 90) {
      setBackground(true)
    } else {
      setBackground(false)
    }
  }

  window.addEventListener('scroll',changeBackground)

  return (
    <NavContainer open={background}>
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
