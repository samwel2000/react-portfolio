import React from 'react';
import { HeadingDiv, SectionHeading } from '../../GlobalElements';
import { 
    SkillsWrapper, 
    SkillsetDiv,
    SkillSection,
    SkillHeading,
    Skillset,
    SkillName,
    Skill
} from './SkillsElements';
import { SoftwareDevskillData, DataAnalyticsskillData } from '../../data';

function Skills() {
    return (
        <SkillsWrapper id="skills">
            <HeadingDiv>
                <SectionHeading num="02">
                    My skills
                </SectionHeading>
            </HeadingDiv>
            <SkillsetDiv>
                <SkillSection>
                    <SkillHeading>Data collection and analysis</SkillHeading>
                    {DataAnalyticsskillData.map((skills) => {
                        return (
                            <Skillset>
                                <Skill key={skills.id}>
                                    {skills.skill}
                                    <SkillName>{skills.name}</SkillName>
                                </Skill>
                            </Skillset>
                        )
                    })}
                </SkillSection>
                <SkillSection>
                    <SkillHeading>Software development</SkillHeading>
                    {SoftwareDevskillData.map((skills) => {
                    return (
                        <Skillset>
                            <Skill key={skills.id}>
                                {skills.skill}
                                <SkillName>{skills.name}</SkillName>
                            </Skill>
                        </Skillset>
                    );
                    })}
                </SkillSection>
            </SkillsetDiv>
        </SkillsWrapper>
    )
}

export default Skills
