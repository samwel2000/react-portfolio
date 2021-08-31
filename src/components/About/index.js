import React, { useEffect, useState } from 'react'
import { HeadingDiv, SectionHeading } from '../../GlobalElements';
// import Photo from "../../assets/images/photo.jpg";
import axios, { ABOUTENDPOINT } from '../../Api';
import { 
    AboutWrapper, 
    InnerContent, 
    AboutInfo, 
    Paragraph, 
    AboutImage, 
    ImageSection, 
    ImageDiv
} from './AboutElements'

function About() {
    const [aboutData, setaboutData] = useState([])

    useEffect(() => {
        axios.get(ABOUTENDPOINT)
        .then(res => setaboutData(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <AboutWrapper id="about">
            <HeadingDiv>
                <SectionHeading num="01">
                    About Me
                </SectionHeading>
            </HeadingDiv>
                {aboutData.map(data => (
                <InnerContent key={data.id}>
                    <AboutInfo data-aos="fade-out" data-aos-duration="2000" data-aos-delay="100">
                        <Paragraph>
                            {data.section1}
                        </Paragraph>
                        <Paragraph> 
                            {data.section2}
                        </Paragraph>
                        <Paragraph>
                            {data.section3}
                        </Paragraph>
                    </AboutInfo>
                    <ImageSection>
                        <ImageDiv> 
                            <AboutImage src={data.photo} alt="My photo" />
                        </ImageDiv>
                    </ImageSection>
                </InnerContent>
            ))}
        </AboutWrapper>
    )
}

export default About
