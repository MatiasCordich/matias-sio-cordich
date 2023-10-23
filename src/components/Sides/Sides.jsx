import React from 'react'
import { AsideLine, EmailLink, LeftSideBox, LeftSideLinks, Link, MiddleSideBox, RightSideBox, SocialLink, TextLink } from './elementsSides'
import {
    FiGithub,
    FiLinkedin,
    FiFacebook
} from 'react-icons/fi'
import { motion } from 'framer-motion'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export const LeftSide = () => {
    return (
        <LeftSideBox
            as={motion.aside}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
        >
            <LeftSideLinks>
                <Link>
                    <SocialLink 
                        href='https://github.com/MatiasCordich'
                        target='_blank'
                    >
                        <FiGithub />
                    </SocialLink>
                </Link>
                <Link>
                    <SocialLink
                        href='https://www.linkedin.com/in/matiassiocordich/'
                        target='_blank'
                    >
                        <FiLinkedin />
                    </SocialLink>
                </Link>
                <Link>
                    <SocialLink
                        href='https://www.facebook.com/matias.cordich'
                        target='_blank'
                    >
                        <FiFacebook />
                    </SocialLink>
                </Link>
                <AsideLine />
            </LeftSideLinks>

        </LeftSideBox>
    )
}

export const MiddleSide = () => {
    return (
        <MiddleSideBox
        >
            <Banner/>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </MiddleSideBox>
    )
}

export const RightSide = () => {
    return (
        <RightSideBox
            as={motion.aside}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
        >
            <EmailLink
                href="mailto:m.scordich@gmail.com"
            >
                <TextLink>
                    m.scordich@gmail.com
                </TextLink>
                <AsideLine />
            </EmailLink>

        </RightSideBox>
    )
}

