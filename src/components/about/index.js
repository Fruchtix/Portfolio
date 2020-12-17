import React from 'react'
import { Container, Wrapper, Headline, Description, IconContainer, Image, Line, HeadlineWrapper } from './aboutelements'

export default function About() {
    return (
        <Container>
            <Wrapper>
                <HeadlineWrapper>
                    <Headline>About me</Headline>
                    <Line />
                </HeadlineWrapper>
                <Description>
                    Hello! I'm Jan, a software engineer based in Cologne, Germany.<br/><br/>
                    I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.<br/><br/>
                    Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.<br/><br/>
                    Here are a few technologies I've been working with recently:<br/><br/>
                </Description>
                <IconContainer>

                </IconContainer>
            </Wrapper>
            <Wrapper>
                <Image />
            </Wrapper>
        </Container>
    )
} 