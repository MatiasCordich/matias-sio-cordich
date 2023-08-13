import React from 'react'
import { Line, TitleNumber, TitleText } from './titleElements'
import { motion } from 'framer-motion'

const Title = ({title, number}) => {
  return (
    <TitleText
      as={motion.h2}
      initial={{x: -10, opacity: 0}}
      whileInView={{x: 10, opacity: 1}}
      transition={{duration: .6, delay: 1}}
    >
        <TitleNumber>{number}.</TitleNumber>
        {title}
        <Line/>
    </TitleText>
  )
}

export default Title