import React from "react";
import {
  Container,
  Wrapper,
  Headline,
  Description,
  Link,
  TechnologyWrapper,
  Technology,
  AboutWrapper,
  IconContainer,
  ImageContainer,
  Line,
  HeadlineWrapper,
} from "./aboutelements";

export default function About() {
  return (
    <Container id="about">
      <HeadlineWrapper>
        <Headline>About me</Headline>
        <Line />
      </HeadlineWrapper>
      <AboutWrapper>
        <Wrapper>
          <Description>
            Hello! I'm Jan, a software engineer based in Wuppertal, Germany.
            <br />
            <br />
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide performant experiences in a pragmatic
            way.
            <br />
            <br />I studied computer science and business economics. At the same
            time I worked for{" "}
            <Link target="_blank" href="https://www.ergo.de/">
              Ergo
            </Link>{" "}
            and later in the engineering team at{" "}
            <Link target="_blank" href="https://www.nexible.de/">
              nexible
            </Link>{" "}
            where I accompanied a wide variety of interesting and meaningful
            projects on a daily basis.
            <br />
            <br />
            Since the beginning of 2021 I've been working in the BSH Project, where I can contribute my knowledge to the{" "}
            <Link target="_blank" href="https://www.bosch-home.com">
              Bosch
            </Link>{" "}and{" "}
            <Link target="_blank" href="https://www.siemens-home.com">
              Siemens
            </Link>{" "}websites.
            <br />
            <br />
            Here are a few technologies I've been working with recently:
            <br />
            <br />
          </Description>
          <IconContainer>
            <TechnologyWrapper>
              <Technology>JavaScript (ES6+)</Technology>
              <Technology>React Native</Technology>
              <Technology>Firebase</Technology>
            </TechnologyWrapper>
            <TechnologyWrapper>
              <Technology>React</Technology>
              <Technology>{`HTML & CSS`}</Technology>
              <Technology>jQuery</Technology>
            </TechnologyWrapper>
          </IconContainer>
        </Wrapper>
        <Wrapper>
          <ImageContainer></ImageContainer>
        </Wrapper>
      </AboutWrapper>
    </Container>
  );
}
