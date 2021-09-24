import React, { useEffect, useState } from 'react';
import axios, { PROJECTSENDPOINT } from '../../Api';
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
            <SectionHeading num="04">Things I`ve built</SectionHeading>
            <div className="pt-4">
                {projectData.filter((item, index) => index<4).map((project, index) => (
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
                                {project.project_stack.split(",").map((stack, index) => (
                                    <li key={index}>{stack}</li>
                                ))}
                            </ProjectStack>
                            <ProjectLinks right={index % 2 === 0 && "right"}>
                                <ProjectLink href="{project.project_link}"><FiGithub /></ProjectLink>
                                <ProjectLink href="{project.github_link}"><BiLinkExternal /></ProjectLink>
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
