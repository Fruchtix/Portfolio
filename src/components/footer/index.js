import React from 'react'
import { Container, Copyright, LegalInformation } from './footerelements'

export default function Footer() {
    return (
        <Container>
            <Copyright>© 2020 Jan Füchtener</Copyright>
            <LegalInformation to="/impressum">Impressum</LegalInformation>
        </Container>
    )
}
