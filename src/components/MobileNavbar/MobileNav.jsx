import { LinkBox, LinkNumber, Logo, LogoContainer, ResumeBtn, SContent, Switch, SwitchBox } from "../Navbar/navbarElements"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Link } from "react-scroll"
import { AnimatePresence, motion } from 'framer-motion'
import { MobileNavMenu, MenuBtn, MobileLinksMenu } from "./navbarMobileElements";
import { logo, logoL } from "../../assets";
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useState } from "react";


const navLinks = [
    { title: "Home", to: "page1", number: "" },
    { title: "Sobre mi", to: "page2", number: "01." },
    { title: "Portfolio", to: "page3", number: "02." },
    { title: "Contacto", to: "page4", number: "03." },
];

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
        height: '100%',
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

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <>
            <MobileNavMenu>
                <LogoContainer>
                    {
                        savedTheme === "default"
                            ? <Logo src={logoL} alt="portfolio-matias-logo" />
                            : <Logo src={logo} alt="portfolio-matias-logo" />
                    }
                </LogoContainer>
                <MenuBtn onClick={toggleMenu}>
                    <HiOutlineMenuAlt3 />
                </MenuBtn>
            </MobileNavMenu>
            <AnimatePresence>
                {

                    open && (

                        <MobileLinksMenu
                            as={motion.ul}
                            variants={menuVars}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <MobileNavLinks
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                handleClick={handleClick}>

                                {/* SWITCH THEME BUTTON */}
                                <SContent>
                                    <BsFillSunFill />
                                    <SwitchBox onClick={handleClick} >
                                        <Switch as={motion.div} layout transition={spring} />
                                    </SwitchBox>
                                    <BsFillMoonFill />
                                </SContent>

                                {navLinks.map((link, index) => {
                                    return (
                                        
                                            <MobileNavLinks
                                                title={link.title}
                                                page={link.to}
                                                number={link.number}
                                                key={index}
                                            />
                                        
                                    );
                                })}



                                {/* BUTTON RESUME */}
                                <ResumeBtn />



                            </MobileNavLinks>
                        </MobileLinksMenu >


                    )

                }
            </AnimatePresence >

        </>


    )
}

const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
        },
    },
};



export const MobileNavLinks = ({ title, href, number }) => {

    return (
        <LinkBox
            variants={mobileLinkVars}
        >
            <Link
                activeClass='active'
                to={href}
                spy={true}
                smooth={true}
                duration={2000}
                style={{ cursor: 'pointer' }}
                offset={-1000}
            >
                <LinkNumber>
                    {number}
                </LinkNumber>
                {title}
            </Link>
        </LinkBox>
    );
}











