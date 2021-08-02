import React from 'react'
import { SectionHeading } from '../../GlobalElements';
import {ProjectWrapper } from "./ProjectElements";

function Project() {
    return (
        <ProjectWrapper>
            <SectionHeading num="04">Things I`ve built</SectionHeading>
            <ul>
                <li>
                    <div>Project contents</div>
                    <div>Project Image</div>
                </li>
            </ul>
        </ProjectWrapper>
    )
}

export default Project
