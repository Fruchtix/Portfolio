import React from 'react'
import { Container, Headline, Information, ContactWrapper, ContactBtn } from './contactelements' 

export default function Contact() {
    return (
        <Container>
            <Headline>Get In Touch</Headline>
            <Information>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</Information>
            <ContactWrapper>
                <ContactBtn>Let's Talk</ContactBtn>
            </ContactWrapper>
        </Container>
    )
}