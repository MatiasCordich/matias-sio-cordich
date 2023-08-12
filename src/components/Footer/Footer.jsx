import { FooterBox, Name, Year } from "./footerElements"


const Footer = () => {

 let year = new Date().getFullYear()
  return (
    <FooterBox>
        <Name>
            Matias Sio Cordich
        </Name>
        <Year>
            {year}
        </Year>
    </FooterBox>
  )
}

export default Footer