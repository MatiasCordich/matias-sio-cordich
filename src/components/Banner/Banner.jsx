import { Link } from "react-scroll"
import { BannerBox, BannerHeadTitle, BannerLink, BannerSpan, BannerText, BannerTitle } from "./bannerElements"
import { motion } from "framer-motion"


const Banner = () => {

    const inline_btn = {
        cursor: 'pointer',
        width: '17rem',
        background: 'transparent',
        border: '1px solid var(--text-Green)',
        padding: '1.5rem 2rem',
        color: 'var(--text-Green)',
        fontSize: '1.6rem',
        borderRadius: '0.6rem',
        fontFamily: 'var(--title - Font)'
    }

    return (
        <BannerBox id='page1'>
            <BannerHeadTitle
                as={motion.h3}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 2.3 }}
            >
                Hola, mi nombre es
            </BannerHeadTitle>
            <BannerTitle
                as={motion.h1}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 2.5 }}>

                Matias Sio Cordich.{" "} <BannerSpan>
                    Desarollador Font-End.
                </BannerSpan>
            </BannerTitle>
            <BannerText
                as={motion.p}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 2.7 }}
            >
                Soy desarollador web especializado en el stack MERN.
                Actualmente me especializo en el área del Front-End, diseñando y desarollando interfaces modernas y adaptables.
                Mi objetivo es conseguir mi primer empleo IT con el fin de poder aplicar todos mis conocimientos aprendidos.
            </BannerText>
            <Link

                activeClass='active'
                to='page3'
                spy={true}
                smooth={true}
                duration={2000}
                offset={-150}
            >
                <BannerLink
                    as={motion.div}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: 2.9 }}
                >
                    Descubre mas!
                </BannerLink>
            </Link>




        </BannerBox>
    )
}

export default Banner