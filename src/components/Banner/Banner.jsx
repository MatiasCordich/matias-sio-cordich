import { BannerBox, BannerBtn, BannerHeadTitle, BannerSpan, BannerText, BannerTitle } from "./bannerElements"


const Banner = () => {
    return (
        <BannerBox>
            <BannerHeadTitle>
                Hola, mi nombre es
            </BannerHeadTitle>
            <BannerTitle>
                Matias Sio Cordich.{" "} <BannerSpan>
                    Desarollador Font-End.
                </BannerSpan>
            </BannerTitle>
            <BannerText>
                Soy desarollador web especializado en el stack MERN.
                Actualmente me especializo en el área del Front-End, diseñando y desarollando interfaces modernas y adaptables.
                Mi objetivo es conseguir mi primer empleo IT con el fin de poder aplicar todos mis conocimientos aprendidos.
            </BannerText>
            <BannerBtn>
                Descubre mas!
            </BannerBtn>
        </BannerBox>
    )
}

export default Banner