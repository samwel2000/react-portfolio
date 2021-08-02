import React from 'react';
import { HeadingDiv, SectionHeading } from '../../GlobalElements';
import { 
    SkillsWrapper, 
    SkillsetDiv,
    SkillSection,
    SkillHeading,
    Skillset,
    SkillName
} from './SkillsElements';
import { SoftwareDevskillData, DataAnalyticsskillData } from '../../data';

function Skills() {
    return (
        <SkillsWrapper id="skills">
            <HeadingDiv>
                <SectionHeading num="03">
                    My skills
                </SectionHeading>
            </HeadingDiv>
            <SkillsetDiv>
                <SkillSection>
                    <SkillHeading>Data analytics tools</SkillHeading>
                    <Skillset>
                        {DataAnalyticsskillData.map((skills) => {
                            return (<SkillName key={skills.id}>{skills.name}</SkillName>)
                        })}
                    </Skillset>
                </SkillSection>
                <SkillSection>
                    <SkillHeading className="pt-4">Software development</SkillHeading>
                    <Skillset>
                        {SoftwareDevskillData.map((skills) => {
                            return (<SkillName key={skills.id}>{skills.name}</SkillName>);
                        })}
                    </Skillset>
                </SkillSection>
            </SkillsetDiv>
        </SkillsWrapper>
    )
}

export default Skills
