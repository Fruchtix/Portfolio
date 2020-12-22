import styled from 'styled-components'

export const Container = styled.div`
    max-width: 600px;
    margin: 120px auto 0px auto;
    text-align: center;
    padding: 0px 25px;

    @media (max-width: 786px) {
        margin-top: 75px;
    }
`

export const Headline = styled.div`
    font-size: 35px;
    margin-bottom: 20px;
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
export const Line = styled.div`
    width: 10%;
    height: 3px;
    background-color: ${({theme}) => theme.colors.thirdColor};
    margin: 0px auto;
    margin-bottom: 25px;
`