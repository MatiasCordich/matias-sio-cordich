import { BannerBox, BannerBtn, BannerHeadTitle, BannerSpan, BannerText, BannerTitle } from "./bannerElements"
import { motion } from "framer-motion"


const Banner = () => {
    return (
        <BannerBox id='page1'>
            <BannerHeadTitle
                as={motion.h3}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 2 }}
            >
                Hola, mi nombre es
            </BannerHeadTitle>
            <BannerTitle
                as={motion.h1}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 2.2 }}>

                Matias Sio Cordich.{" "} <BannerSpan>
                    Desarollador Font-End.
                </BannerSpan>
            </BannerTitle>
            <BannerText
                as={motion.p}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 2.4 }}
            >
                Soy desarollador web especializado en el stack MERN.
                Actualmente me especializo en el área del Front-End, diseñando y desarollando interfaces modernas y adaptables.
                Mi objetivo es conseguir mi primer empleo IT con el fin de poder aplicar todos mis conocimientos aprendidos.
            </BannerText>
            <BannerBtn
                as={motion.button}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: 2.6 }}
            >
                Descubre mas!
            </BannerBtn>
        </BannerBox>
    )
}

export default Banner