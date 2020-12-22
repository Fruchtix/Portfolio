import React, { useState } from 'react'
import { Container, NavWrapper, NavElement, NavLink, MenuLine, ResumeWrapper, ResumeBtn, HamburgerMenu } from './navbarelements'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const handleMenuClick = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <Container>
            <HamburgerMenu open={open} onClick={handleMenuClick}>
                <MenuLine open={open}/>
                <MenuLine open={open}/>
                <MenuLine open={open} />
            </HamburgerMenu>
            <NavWrapper open={open}>
                <NavElement><NavLink onClick={handleMenuClick} activeClass="active" to="about" spy={true} smooth={true} duration={600}>About</NavLink></NavElement>
                <NavElement><NavLink onClick={handleMenuClick} activeClass="active" to="projects" spy={true} smooth={true} duration={600}>Work</NavLink></NavElement>
                {/* <NavElement><NavLink onClick={handleMenuClick} activeClass="active" to="jobs" spy={true} smooth={true} duration={600}>Experience</NavLink></NavElement> */}
                <NavElement><NavLink onClick={handleMenuClick} activeClass="active" to="contact" spy={true} smooth={true} duration={600}>Contact</NavLink></NavElement>
                <NavElement>
                    <ResumeWrapper>
                        <ResumeBtn>Resume</ResumeBtn>
                    </ResumeWrapper>
                </NavElement>
            </NavWrapper>
        </Container>
    )
}
