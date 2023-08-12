import React from 'react'
import { L_LayoutBox, S_LayoutBox } from './elementsLayouts'

export const S_Layout = ({ children }) => {
    return (
        <S_LayoutBox>
            {children}
        </S_LayoutBox>
    )
}

export const L_Layout = ({ children }) => {
    return (
        <L_LayoutBox>
            {children}
        </L_LayoutBox>
    )
}

