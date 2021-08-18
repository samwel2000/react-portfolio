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
    ProjectLink, ViewMore } from "./ProjectElements";
import { ProjectsData } from '../../data';
import {FiGithub} from 'react-icons/fi';
import {BiLinkExternal} from 'react-icons/bi';

function Project() {
    return (
        <ProjectsWrapper  id="projects">
            <SectionHeading num="04">Things I`ve built</SectionHeading>
            <div className="pt-4">
                {ProjectsData.map((project, index) => (
                    <ProjectWrapper 
                    key={index} 
                    className="mb-5 pb-5" 
                    right={index % 2 === 0 && "right"}>
                        <ImageDiv right={index % 2 === 0 && "right"}>
                            <Image src={project.photo} alt="" />
                        </ImageDiv>
                        <ProjectContent right={index % 2 === 0 && "right"}>
                            <ProjectType right={index % 2 === 0 && "right"}>Featured project</ProjectType>
                            <ProjectHeading right={index % 2 === 0 && "right"}>{project.heading}</ProjectHeading>
                            <ProjectParagraph right={index % 2 === 0 && "right"}>{project.content}</ProjectParagraph>
                            <ProjectStack right={index % 2 === 0 && "right"}>
                                {project.stacks.map((stack, index) => (
                                    <li key={index}>{stack}</li>
                                ))}
                            </ProjectStack>
                            <ProjectLinks right={index % 2 === 0 && "right"}>
                                <ProjectLink href="/"><FiGithub /></ProjectLink>
                                <ProjectLink href="/"><BiLinkExternal /></ProjectLink>
                            </ProjectLinks>
                        </ProjectContent>
                    </ProjectWrapper>
                ))}
                
                <ViewMore href="/">View archive of projects</ViewMore>
            </div>
        </ProjectsWrapper>
    )
}

export default Project
