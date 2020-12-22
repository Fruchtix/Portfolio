import React from 'react'
import { Container, HeadlineWrapper, Headline, Line, Link, ProjectsWrapper, Technology, ProjectType, Project, ProjectImage, ProjectInfo, ProjectName, ProjectDesc, TechnologyWrapper, ProjectLink, ProjectLinks, GithubLink } from './workelements'
import {projects} from '../../fixtures/projects'

export default function Work() {
    return (
        <Container id="projects">
            <HeadlineWrapper>
                <Headline>Some Things I've Built</Headline>
                <Line />
            </HeadlineWrapper>
            <ProjectsWrapper>
                {projects.map(project => {
                    return (
                        <Project key={project.id}>
                            <ProjectImage direction={project.direction} src={project.imageUrl} />
                            <ProjectInfo direction={project.direction}>
                                <ProjectType>Featured Project</ProjectType>
                                <ProjectName>{project.name}</ProjectName>
                                <ProjectDesc>{project.description}</ProjectDesc>
                                <TechnologyWrapper direction={project.direction}>
                                    {project.technologys.map((technology, index) => (
                                        <Technology key={index} direction={project.direction}>{technology}</Technology>
                                    ))}
                                </TechnologyWrapper>
                                <ProjectLinks>
                                    <Link href={project.githubLink} >
                                        <GithubLink />
                                    </Link>
                                    <Link href={project.projectLink}>
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
