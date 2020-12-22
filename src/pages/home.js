import React from 'react'
import { Hero, About, Work, Contact, Footer, Navbar } from '../components'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Work />
            {/* <Experience /> */}
            <Contact />
            <Footer />
        </>
    )
}  
 