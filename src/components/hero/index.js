import React from 'react'
import { Container, Tag, Headline, Wrapper, SubHeadline, ContactBtn, Highlight, TextArea, ContactLink } from './heroelements'
import { Particles } from '../../components'

export default function Hero() {
    return (
        <Container>
            <Wrapper>
                <Tag top>&nbsp;&nbsp;&nbsp;{`<body>`}</Tag>
                <TextArea>
                    <Headline>Hi,<br/>I'm <Highlight>J</Highlight>an,<br/>web developer.</Headline>
                    <SubHeadline>Front End Developer / React Expert</SubHeadline>
                    <br/>
                    <ContactBtn>
                        <ContactLink href="mailto:jan@fuechtener.eu">Let's Talk</ContactLink>
                    </ContactBtn>
                </TextArea>
                <Tag bottom>&nbsp;&nbsp;&nbsp;{`</body>`}<br/>{`</html>`}</Tag>
            </Wrapper>
            <Particles />
        </Container>
    )
}