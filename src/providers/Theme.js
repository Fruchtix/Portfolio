import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primaryColor: "#fff",
        secondaryColor: "#515152",
        background: "#1D1D1D",

    }
}

export default function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}