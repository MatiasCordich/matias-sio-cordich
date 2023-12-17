import {
  Logo,
  LogoContainer,
  SContent,
  Switch,
  SwitchBox,
} from "../Navbar/navbarElements";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import {
  MobileNavMenu,
  MenuBtn,
  MobileLinksMenu,
  LinksMobileContainer,
  ResumeBtnMobile,
} from "./navbarMobileElements";
import { logo, logoL } from "../../assets";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { LinkBoxMobile } from "./navbarMobileElements";
import { containerVars, menuVars, mobileLinkVars, spring } from "./animations";

export const MobileNavBox = ({ handleClick }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const savedTheme = window.localStorage.getItem("theme");

  return (
    <>
      <MobileNavMenu>
        {/* LOGO CONTAINER */}
        <LogoContainer>
          {savedTheme === "default" ? (
            <Logo src={logoL} alt="portfolio-matias-logo" />
          ) : (
            <Logo src={logo} alt="portfolio-matias-logo" />
          )}
        </LogoContainer>

        {/* MENU BTN HAMBURGER */}
        <MenuBtn onClick={toggleMenu}>
          <HiOutlineMenuAlt3 />
        </MenuBtn>
      </MobileNavMenu>

      <AnimatePresence>
        {open && (
          <MobileLinksMenu
            as={motion.ul}
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <LinksMobileContainer
              as={motion.div}
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
            >
              {/* SWITCH THEME BUTTON */}
              <SContent as={motion.div} variants={mobileLinkVars}>
                <BsFillSunFill />
                <SwitchBox onClick={handleClick}>
                  <Switch as={motion.div} layout transition={spring} />
                </SwitchBox>
                <BsFillMoonFill />
              </SContent>

              {/* LINK - HOME */}
              <LinkBoxMobile as={motion.li} variants={mobileLinkVars}>
                <Link
                  onClick={toggleMenu}
                  activeClass="active"
                  to="page1"
                  spy={true}
                  smooth={true}
                  duration={2000}
                  style={{ cursor: "pointer" }}
                  offset={-1000}
                >
                  Inicio
                </Link>
              </LinkBoxMobile>

              {/* LINK - ABOUT */}
              <LinkBoxMobile as={motion.li} variants={mobileLinkVars}>
                <Link
                  onClick={toggleMenu}
                  activeClass="active"
                  to="page2"
                  spy={true}
                  smooth={true}
                  duration={2000}
                  style={{ cursor: "pointer" }}
                  offset={-150}
                >
                  Sobre Mi
                </Link>
              </LinkBoxMobile>

              {/* LINK - PROJECTS */}
              <LinkBoxMobile as={motion.li} variants={mobileLinkVars}>
                <Link
                  onClick={toggleMenu}
                  activeClass="active"
                  to="page3"
                  spy={true}
                  smooth={true}
                  duration={2000}
                  style={{ cursor: "pointer" }}
                  offset={-150}
                >
                  Projectos
                </Link>
              </LinkBoxMobile>

              {/* LINK - CONTACTC */}
              <LinkBoxMobile as={motion.li} variants={mobileLinkVars}>
                <Link
                  onClick={toggleMenu}
                  activeClass="active"
                  to="page4"
                  spy={true}
                  smooth={true}
                  duration={2000}
                  style={{ cursor: "pointer" }}
                  offset={-150}
                >
                  Contacto
                </Link>
              </LinkBoxMobile>

              {/* LINK - RESUME */}
              <ResumeBtnMobile as={motion.button} variants={mobileLinkVars}>
                Resume
              </ResumeBtnMobile>
            </LinksMobileContainer>
          </MobileLinksMenu>
        )}
      </AnimatePresence>
    </>
  );
};
