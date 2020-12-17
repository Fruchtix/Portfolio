import React from 'react'
import { Container, Tag, Headline, SubHeadline, ContactBtn, TextArea, ContactLink } from './heroelements'

export default function Hero() {
    return (
        <Container>
            <Tag top>&nbsp;&nbsp;&nbsp;{`<body>`}</Tag>
            <TextArea>
                <Headline>Hi,<br/>I'm Jan,<br/>web developer.</Headline>
                <SubHeadline>Front End Developer / React Expert</SubHeadline>
                <br/>
                <ContactBtn>
                    <ContactLink href="mailto:jan@fuechtener.eu">Let's Talk</ContactLink>
                </ContactBtn>
            </TextArea>
            {/* <Tag bottom>&nbsp;&nbsp;&nbsp;{`</body>`}<br/>{`</html>`}</Tag> */}
        </Container>
    )
}