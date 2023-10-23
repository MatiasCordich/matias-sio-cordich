import { AboutBox, AboutContent, AboutImage, AboutTexts, IconBox, Image, LineAbout, SpanText, TechItem, TechStack, Text, TextBox } from './aboutElements'
import { BsCheck2 } from 'react-icons/bs'
import { S_Layout } from '../Layouts/Layouts'
import Title from '../Title/Title'
import { stack } from '../../Information/information'
import { profile } from '../../assets'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'

const About = () => {

    return (
        <AboutBox id='page2'>
            <S_Layout>
                <Title
                    title="Sobre mi" number="01"
                />
                <AboutContent
                    as={motion.div}
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 10, opacity: 1 }}
                    transition={{ duration: .6, delay: 2 }}

                >
                    <AboutTexts>
                        <TextBox>
                            <Text>
                                Soy un desarrollador FrontEnd apasionado en la construcción de interfaces de usuario atractivas y funcionales. Mi interés por el desarollo web comenzó en 2021 cuando quería unir mis dos pasiones: la <SpanText>computación</SpanText> y el <SpanText>diseño</SpanText>.
                            </Text>
                        </TextBox>
                        <TextBox>
                            <Text>
                                Soy un apasionado por las tecnologías, me caracterizo por mi enorme <SpanText>curiosidad</SpanText> y <SpanText>entusiamo</SpanText> a la hora de aprender en cada proyecto o desafío que se me presenta.
                            </Text>
                        </TextBox>

                        <TextBox>
                            <Text>
                                Espero conseguir un puesto laboral donde pueda emplear mis conocimientos acutales y tener la oportunidad de seguir ampliandolos
                            </Text>
                        </TextBox>
                        <TextBox>
                            <Text>
                                Algunas de las tecnologías en la que he estado trabajo recientemente:
                            </Text>
                        </TextBox>
                        <LineAbout />
                        <TechStack>
                            {stack.map(s =>
                                <TechItem key={s.id}>
                                    <IconBox>
                                        <BsCheck2 />
                                    </IconBox>
                                    {s.name}
                                </TechItem>
                            )}
                        </TechStack>
                    </AboutTexts>
                    <AboutImage>
                        <Image src={profile} alt='profile-portfolio' />
                    </AboutImage>
                </AboutContent>
            </S_Layout>
        </AboutBox >
    )
}

export default About