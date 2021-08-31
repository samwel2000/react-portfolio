import React, { useEffect, useState }from 'react';
import axios, { SKILLSENDPOINT } from '../../Api';
import { HeadingDiv, SectionHeading } from '../../GlobalElements';
import { 
    SkillsWrapper, 
    SkillsetDiv,
    SkillSection,
    SkillHeading,
    Skillset,
    SkillName
} from './SkillsElements';

function Skills() {
    const [skillsData, setskillsData] = useState([])

    useEffect(() => {
        axios.get(SKILLSENDPOINT)
        .then(res => setskillsData(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <SkillsWrapper id="skills">
            <HeadingDiv>
                <SectionHeading num="03">
                    My skills
                </SectionHeading>
            </HeadingDiv>
            <SkillsetDiv>
                {skillsData.map(data => (
                    <SkillSection key={data.id}>
                        <SkillHeading data-aos="fade-out" data-aos-duration="1000" data-aos-delay="100">{data.heading}</SkillHeading>
                        <Skillset>
                            {data.skill_liist.split(",").map((skill, index) => {
                                return (<SkillName key={index} data-aos="fade-in" data-aos-duration="1000" data-aos-delay={`${index*5}0`}>{skill}</SkillName>)
                            })}
                        </Skillset>
                    </SkillSection>
                ))}
            </SkillsetDiv>
        </SkillsWrapper>
    )
}

export default Skills
