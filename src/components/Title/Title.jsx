import React from 'react'
import { Line, TitleNumber, TitleText } from './titleElements'

const Title = ({title, number}) => {
  return (
    <TitleText>
        <TitleNumber>{number}.</TitleNumber>
        {title}
        <Line/>
    </TitleText>
  )
}

export default Title