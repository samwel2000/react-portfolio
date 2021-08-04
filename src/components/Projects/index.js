import React from 'react'
import { SectionHeading } from '../../GlobalElements';
import {ProjectsWrapper, ProjectWrapper, ImageDiv, Image, ProjectContent, ProjectHeading, ProjectParagraph, ProjectStack } from "./ProjectElements";
import Photo from '../../assets/images/photo.jpg'

function Project() {
    return (
        <ProjectsWrapper>
            <SectionHeading num="04">Things I`ve built</SectionHeading>
            <div className="pt-4">
                <ProjectWrapper>
                    <ImageDiv>
                        <Image src={Photo} alt="" />
                    </ImageDiv>
                    <ProjectContent>
                        <ProjectHeading>Project heading</ProjectHeading>
                        <ProjectParagraph>Project contents lorem ipsum ihsdf jhsdfk jhl;asdfjlhasd fakdsjfg;kdjfg ;DFJKGJ;LDfd fSDJFG;JKLdfg ;KDGFJKLdfg </ProjectParagraph>
                        <ProjectStack>
                            <li>React js</li>
                            <li>Django</li>
                            <li>Github link</li>
                        </ProjectStack>
                    </ProjectContent>
                </ProjectWrapper>
            </div>
        </ProjectsWrapper>
    )
}

export default Project
