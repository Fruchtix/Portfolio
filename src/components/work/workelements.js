import styled from 'styled-components'
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline'
import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal'

export const Container = styled.div`
    padding: 0px 12vw;
    min-height: 80vh;
    max-width: 1100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: auto;
`

export const Headline = styled.div`
    font-size: 28px;
`

export const Line = styled.div`
    background-color: #515152;
    height: 1px;
    flex: 1;
    margin-left: 20px;
`

export const HeadlineWrapper = styled.div`
    display: flex;
    margin-bottom: 30px;
    align-items: center;
`

export const ProjectsWrapper = styled.div`
    margin: 50px 0px 10vh 0px;
`

export const Project = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: 125px; 
`

export const ProjectImage = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    grid-row: 1;
    grid-column: ${({direction}) => direction === "row-reverse" ? "6 / 12" : "1 / 7"};
`

export const ProjectInfo = styled.div`
    grid-column: ${({direction}) => direction === "row-reverse" ? "1 / 7" : "6 / 12"};
    grid-row: 1;
    text-align: ${({direction}) => direction === "row-reverse" ? "left" : "right"};
`

export const ProjectName = styled.div`
    margin-bottom: 20px;
    font-size: 24px;
`

export const ProjectDesc = styled.div`
    background-color: ${props => props.theme.colors.secondaryColor};
    padding: 20px;
    z-index: 99;
    line-height: 22px;
`

export const TechnologyWrapper = styled.ul`
    display: flex;
    justify-content: ${({direction}) => direction === "row-reverse" ? "flex-start" : "flex-end"};
    list-style: none;
    margin-top: 25px;
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
`

export const Link = styled.a``
