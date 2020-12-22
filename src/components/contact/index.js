import React from 'react'
import { Container, Headline, Line, Information, ContactWrapper, ContactBtn } from './contactelements' 

export default function Contact() {
    return (
        <Container id="contact">
            <Headline>Get In Touch</Headline>
            <Line />
            <Information>I'm currently looking for new opportunities and challenges. Whether you have a question or just want to say hi, I'll try my best to get back to you!</Information>
            <ContactWrapper>
                <ContactBtn href="mailto:jan@fuechtener.eu">Let's Talk</ContactBtn>
            </ContactWrapper>
        </Container>
    )
}