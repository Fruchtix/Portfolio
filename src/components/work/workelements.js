import styled from 'styled-components'
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline'
import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal'
import Theme from '../../providers/Theme'

export const Container = styled.div`
    padding: 0px 10vw;
    min-height: 80vh;
`

export const Headline = styled.div``

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

export const ProjectsWrapper = styled.div``

export const Project = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    min-height: 35vh;
    margin-top: 75px; 
`

export const ProjectImage = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    grid-row: 1;
    grid-column: 1 / 6; 
`

export const ProjectInfo = styled.div`
    grid-column: 5 / 9;
    grid-row: 1;
    text-align: right;
`

export const ProjectName = styled.div``

export const ProjectDesc = styled.div`
    background-color: ${props => props.theme.colors.secondaryColor};
    padding: 20px;
    z-index: 99;
`

export const TechnologyWrapper = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
`

export const Technology = styled.li`
    margin: 0px 0px 0px 20px;
`

export const ProjectLink = styled(LinkExternal)`
    width: 30px;
    color: #fff;
    height: 30px;
`

export const ProjectLinks = styled.div`
`

export const GithubLink = styled(GithubOutline)`
    width: 30px;
    height: 30px;
    color: #fff;
`

export const ProjectType = styled.div``

export const Link = styled.a``
