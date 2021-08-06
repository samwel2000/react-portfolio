import React from 'react'
import { SectionHeading } from '../../GlobalElements';
import {
    ProjectsWrapper, 
    ProjectWrapper, 
    ImageDiv, 
    Image, 
    ProjectContent, 
    ProjectHeading, 
    ProjectParagraph, 
    ProjectStack, 
    ProjectType,
    ProjectLinks,
    ProjectLink } from "./ProjectElements";
import { ProjectsData } from '../../data';
import {FiGithub} from 'react-icons/fi';
import {BiLinkExternal} from 'react-icons/bi';

function Project() {
    return (
        <ProjectsWrapper  id="projects">
            <SectionHeading num="04">Things I`ve built</SectionHeading>
            <div className="pt-4">
                {ProjectsData.map((project, index) => (
                    <ProjectWrapper key={index} className="mb-5" >
                        <ImageDiv>
                            <Image src={project.photo} alt="" />
                        </ImageDiv>
                        <ProjectContent right={index % 2 === 0 && "right"}>
                            <ProjectType>Featured project</ProjectType>
                            <ProjectHeading>{project.heading}</ProjectHeading>
                            <ProjectParagraph>{project.content}</ProjectParagraph>
                            <ProjectStack>
                                {project.stacks.map((stack, index) => (
                                    <li key={index}>{stack}</li>
                                ))}
                            </ProjectStack>
                            <ProjectLinks>
                                <ProjectLink href="/"><FiGithub /></ProjectLink>
                                <ProjectLink href="/"><BiLinkExternal /></ProjectLink>
                            </ProjectLinks>
                        </ProjectContent>
                    </ProjectWrapper>
                ))}
            </div>
        </ProjectsWrapper>
    )
}

export default Project
