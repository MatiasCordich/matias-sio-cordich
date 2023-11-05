import { LinkBox, LinkNumber, Logo, LogoContainer, ResumeBtn, SContent, Switch, SwitchBox } from "../Navbar/navbarElements"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Link } from "react-scroll"
import { AnimatePresence, motion } from 'framer-motion'
import { LinksMobile, MenuBtn, MobileNavMenu, } from "./navbarMobileElements";
import { logo, logoL } from "../../assets";
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

const menuVars = {
    initial: {
        height: 0
    },
    animate: {
        height: '100svh',
        transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
        },
    },
    exit: {
        height: 0,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
const containerVars = {
    initial: {
        transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
        },
    },
    open: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
        },
    },
};

const savedTheme = window.localStorage.getItem('theme')



export const MobileNavBox = ({ handleClick }) => {
    return (
        <MobileNavMenu>
            <LogoContainer>
                {
                    savedTheme === "default"
                        ? <Logo src={logoL} alt="portfolio-matias-logo" />
                        : <Logo src={logo} alt="portfolio-matias-logo" />
                }
            </LogoContainer>
            <MenuBtn onClick={handleClick}>
                <HiOutlineMenuAlt3 />
            </MenuBtn>
        </MobileNavMenu>
    )
}

export const MobileNavLinks = () => {
    return (
        <LinksMobile
            as={motion.ul}
            variants={menuVars}
            initial={menuVars.initial}
            animate={menuVars.animate}
            exit={menuVars.exit}
        >

        </LinksMobile>
    )
}