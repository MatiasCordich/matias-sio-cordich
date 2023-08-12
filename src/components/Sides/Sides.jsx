import React from 'react'
import { AsideLine, EmailLink, LeftSideBox, LeftSideLinks, Link, MiddleSideBox, RightSideBox, SocialLink, TextLink } from './elementsSides'
import {
    FiGithub,
    FiLinkedin,
    FiFacebook
} from 'react-icons/fi'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export const LeftSide = () => {
    return (
        <LeftSideBox>
            <LeftSideLinks>
                <Link>
                    <SocialLink>
                        <FiGithub />
                    </SocialLink>
                </Link>
                <Link>
                    <SocialLink>
                        <FiLinkedin />
                    </SocialLink>
                </Link>
                <Link>
                    <SocialLink>
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
        <MiddleSideBox>
            <Banner/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </MiddleSideBox>
    )
}

export const RightSide = () => {
    return (
        <RightSideBox>
            <EmailLink>
                <TextLink>
                m.scordich@gmail.com
                </TextLink>
                
                <AsideLine/>
            </EmailLink>

        </RightSideBox>
    )
}

