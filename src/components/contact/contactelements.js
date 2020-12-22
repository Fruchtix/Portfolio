import styled from 'styled-components'

export const Container = styled.div`
    max-width: 600px;
    margin: 0px auto 100px auto;
    text-align: center;
    padding: 0px 25px;
`

export const Headline = styled.div`
    font-size: 35px;
    margin-bottom: 25px;
`

export const Information = styled.div`
    line-height: 22px;
`

export const ContactWrapper = styled.div`
    margin-top: 65px;
`

export const ContactBtn = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.thirdColor};
    padding: 15px 27px;
    border: 1px solid ${props => props.theme.colors.thirdColor};
    border-radius: 2px;
    font-size: 14px;
`
