import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`

export const Headline = styled.h1`
    font-size: 50px;
    font-weight: 600;

    &:before {
        content: '<h1>';
        font-family: 'La Belle Aurore', cursive;
        color: #515152;
        font-size: 18px;
        position: absolute;
        margin-top: -30px;
        left: -15px;
        margin-left: 10vw;
    }

    &:after {
        content: '</h1>';
        font-family: 'La Belle Aurore', cursive;
        color: #515152;
        font-size: 18px;
        position: absolute;
        margin-top: 38px;
        margin-left: 20px;
    }
`

export const SubHeadline = styled.h2`
    color: ${props => props.theme.colors.fourthColor};
    margin-top: 20px;
    font-weight: normal;
    font-size: 11px;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 3px;
`

export const TextArea = styled.div`
    margin-left: 10vw;
`

export const Tag = styled.div`
    font-family: 'La Belle Aurore', cursive;
    font-size: 18px;
    color: #515152;
    position: absolute;
    bottom: ${props => props.bottom ? "6vh" : "auto"};
    top: ${props => props.top ? "6vh" : "auto"};
    left: 5vw;
`

export const ContactBtn = styled.div`
    margin-top: 25px;
`

export const ContactLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.thirdColor};
    padding: 15px 27px;
    border: 1px solid ${props => props.theme.colors.thirdColor};
    border-radius: 2px;
    font-size: 14px;
`

export const Highlight = styled.span`
    /* color: ${props => props.theme.colors.thirdColor}; */
`