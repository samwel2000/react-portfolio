import React, { useEffect, useState } from 'react';
import axios, { PROJECTSENDPOINT } from '../../Api';
import { HeadingDiv, SectionHeading } from '../../GlobalElements';
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
    ProjectLink,
    ViewMoreWrapper,
    ViewMore
} from "./ProjectElements";
import { FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Project() {
    const [projectData, setprojectData] = useState([])

    useEffect(() => {
        axios.get(PROJECTSENDPOINT)
            .then(res => setprojectData(res.data))
            .catch(err => console.log(err))
    }, [])

    const imageAnimationStyle = window.innerWidth > 768 ? "fade-left" : "fade-in";
    const contentAnimationStyle = window.innerWidth > 768 ? "fade-right" : "fade-in";
    const animationDelay = window.innerWidth < 769 ? "500" : "0";

    return (
        <ProjectsWrapper id="projects">
            <HeadingDiv>
                <SectionHeading num="04">Things I`ve built</SectionHeading>
            </HeadingDiv>
            <div className="pt-5">
                {projectData.filter((item, index) => item.pinned).map((project, index) => (
                    <ProjectWrapper
                        key={index}
                        right={index % 2 === 0 && "right"}>
                        <ImageDiv right={index % 2 === 0 && "right"} data-aos={imageAnimationStyle} data-aos-duration="1500">
                            <Image src={project.photo} alt="" />
                        </ImageDiv>
                        <ProjectContent right={index % 2 === 0 && "right"} data-aos={contentAnimationStyle} data-aos-duration="1500" data-aos-delay={animationDelay}>
                            <ProjectType right={index % 2 === 0 && "right"}>{project.project_setting}</ProjectType>
                            <ProjectHeading right={index % 2 === 0 && "right"}>{project.heading}</ProjectHeading>
                            <ProjectParagraph right={index % 2 === 0 && "right"}>{project.content}</ProjectParagraph>
                            <ProjectStack right={index % 2 === 0 && "right"}>
                                {project.project_stack.split(",").map((stack, index) => (index <= 4) &&
                                    <li key={index}>{stack}</li>
                                )}
                            </ProjectStack>
                            <ProjectLinks right={index % 2 === 0 && "right"}>
                                {project.project_link && <ProjectLink href={project.project_link} target="_blank" rel="noopener noreferrer"><FiGithub /></ProjectLink>}
                                {project.github_link && <ProjectLink href={project.github_link} target="_blank" rel="noopener noreferrer"><BiLinkExternal /></ProjectLink>}
                            </ProjectLinks>
                        </ProjectContent>
                    </ProjectWrapper>
                ))}
                <ViewMoreWrapper>
                    <ViewMore to="/archive" data-aos="fade-in" data-aos-duration="1000">View archive of projects <FaLongArrowAltRight /></ViewMore>
                </ViewMoreWrapper>
            </div>
        </ProjectsWrapper>
    )
}

export default Project
