import { S_Layout } from '../Layouts/Layouts'
import { ContactBox, ContactHead, ContactLink, ContactText, ContactTitle } from './contactElements'
const Contact = () => {
  return (
    <S_Layout>
        <ContactBox>
            <ContactHead>
                04. Contacto
            </ContactHead>
            <ContactTitle>
                Muchas gracias por tu visita!
            </ContactTitle>
            <ContactText>
            Si has llegado hasta aquí, te doy las gracias por visitar mi portfolio.</ContactText> 
            <ContactText> Actualmente me encuentro en la búsqueda de mi primer empleo IT. </ContactText>
            <ContactText>  Si tienes alguna propuesta laboral, no dudes en escribirme. Muchas gracias!</ContactText>
         
            
            <ContactLink>
                Di, hola!
            </ContactLink>
        </ContactBox>
    </S_Layout>
  )
}

export default Contact