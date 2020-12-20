import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primaryColor: "#fff",
        secondaryColor: "#515152",
        thirdColor: "#E2786C",
        fourthColor: "#8d8d8d",
        background: "#1D1D1D",
    },
    fonts: {
        primaryFont: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        secondaryFont: "",
    }
}

export default function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}