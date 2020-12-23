import styled from 'styled-components'
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline'
import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal'

export const Container = styled.div`
    padding: 125px 15vw;
    min-height: 80vh;
    max-width: 1100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: auto;

    @media (max-width: 768px) {
        padding: 13vh 6vw;
    }
`

export const Headline = styled.div`
    font-size: 28px;
    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`

export const Line = styled.div`
    background-color: #515152;
    height: 1px;
    margin-left: 20px;
    margin-right: 30%;
    width: 100%;

    @media (max-width: 768px) {
        margin-right: 0px;
        margin-left: 10px;
    }
`

export const HeadlineWrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
    align-items: center;

    @media (max-width: 768) {
        display: inherit;
    }
`

export const ProjectsWrapper = styled.div`
    margin: 40px 0px 0px 0px;

    @media (max-width: 768px) {
        margin-top: 20px
    }
`

export const Project = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: 135px; 

    &:last-child {
        margin-bottom: 0px;
    }

    @media (max-width: 768px) {
        margin-bottom: 75px;
    }
`

export const ProjectImage = styled.div`
    width: 100%; 
    /* max-height: 50vh; */
    height: auto;
    /* object-fit: contain; */
    /* object-position: 0 0; */
    filter: grayscale(0.8);
    background: url('${props => props.src}') no-repeat;
    background-position: 0 0;
    background-size: cover;
    grid-row: 1;
    z-index: -1;
    grid-column: ${({direction}) => direction === "row-reverse" ? "6 / 13" : "1 / 8"};

    @media (max-width: 768px) {
        grid-column: 1 / 13;
    }
`

export const ProjectInfo = styled.div`
    grid-column: ${({direction}) => direction === "row-reverse" ? "1 / 7" : "7 / 13"};
    grid-row: 1;
    text-align: ${({direction}) => direction === "row-reverse" ? "left" : "right"};

    @media (max-width: 768px) {
        grid-column: 1 / 13;
        background: rgb(0,0,0,0.8);
        padding: 20px 0px;
    }
`

export const ProjectName = styled.div`
    margin-bottom: 20px;
    font-size: 24px;
    padding-right: 20px;
    padding-left: 20px;
`

export const ProjectDesc = styled.div`
    background-color: #2F2F2F;
    padding: 20px;
    z-index: 10010;
    line-height: 22px;

    @media (max-width: 768px) {
        background: transparent;
    }
`

export const TechnologyWrapper = styled.ul`
    display: flex;
    justify-content: ${({direction}) => direction === "row-reverse" ? "flex-start" : "flex-end"};
    list-style: none;
    margin-top: 25px;
    padding-right: 20px;
    padding-left: 20px;
`

export const Technology = styled.li`
    margin: ${({direction}) => direction === "row-reverse" ? "0px 20px 0px 0px" : "0px 0px 0px 20px"};
    color: ${props => props.theme.colors.fourthColor};
`

export const ProjectLink = styled(LinkExternal)`
    width: 30px;
    height: 30px;
    color: ${props => props.theme.colors.fourthColor};
`

export const ProjectLinks = styled.div`
    margin-top: 25px;
    margin-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
`

export const GithubLink = styled(GithubOutline)`
    width: 30px;
    height: 30px;
    margin-right: 20px;
    color: ${props => props.theme.colors.fourthColor};
`

export const ProjectType = styled.div`
    margin: 20px 0px 10px 0px;
    color: ${props => props.theme.colors.thirdColor};
    font-size: 16px;
    padding-right: 20px;
    padding-left: 20px;
`

export const Link = styled.a`
`