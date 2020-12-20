import React from 'react'
import { Container, HeadlineWrapper, Headline, Line, Link, ProjectsWrapper, Technology, ProjectType, Project, ProjectImage, ProjectInfo, ProjectName, ProjectDesc, TechnologyWrapper, ProjectLink, ProjectLinks, GithubLink } from './workelements'
import projects from '../../fixtures/projects.json'

export default function Work() {
    return (
        <Container>
            <HeadlineWrapper>
                <Headline>Some Things I've Built</Headline>
                <Line />
            </HeadlineWrapper>
            <ProjectsWrapper>
                {projects.map(project => {
                    return (
                        <Project>
                            <ProjectImage direction={project.direction} src={project.imageUrl} />
                            <ProjectInfo direction={project.direction}>
                                <ProjectType>Featured Project</ProjectType>
                                <ProjectName>{project.name}</ProjectName>
                                <ProjectDesc>{project.description}</ProjectDesc>
                                <TechnologyWrapper>
                                    {project.technologys.map(technology => (
                                        <Technology>{technology}</Technology>
                                    ))}
                                </TechnologyWrapper>
                                <ProjectLinks>
                                    <Link href={"www.google.de"} >
                                        <GithubLink />
                                    </Link>
                                    <Link href={"www.google.de"}>
                                        <ProjectLink />
                                    </Link>
                                </ProjectLinks>
                            </ProjectInfo>
                        </Project>
                    )
                })}
            </ProjectsWrapper>
        </Container>
    )
}
