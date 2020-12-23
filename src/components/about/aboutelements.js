import styled from 'styled-components'
import image from '../../assets/images/me.jpg'

export const Container = styled.div`
    padding: 10vh 15vw;
    margin: auto;
    max-width: 1100px;

    @media (max-width: 768px) {
        padding: 5vh 6vw 10vh 6vw;
    }
`
export const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Headline = styled.div`
    font-size: 28px;
    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`

export const Description = styled.div`
    line-height: 22px;
`

export const Line = styled.div`
    background-color: #515152;
    height: 1px;
    margin-left: 20px;
    width: 30%;

    @media (max-width: 768px) {
        margin-right: 0px;
        margin-left: 10px;
    }
`

export const IconContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const HeadlineWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;
    align-items: center;
`

export const ImageContainer = styled.div`
    width: calc(100% - 20px);
    height: 260px;
    border-radius: 8px;
    background-color: #515152;
    /* align-self: center; */
    position: relative;
    background: url(${image}) no-repeat;
    background-size: cover;

    &:after {
        content: "";
        border: 2px solid ${props => props.theme.colors.thirdColor};
        top: 20px;
        left: 20px;
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`

export const Technology = styled.div`
    margin: 10px 0px;

    &:before {
        content: "▹";
        color: ${props => props.theme.colors.thirdColor};
        padding-right: 8px;
    }
`

export const TechnologyWrapper = styled.div``

export const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.thirdColor}
`
