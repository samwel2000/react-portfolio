import React from 'react'
import { HeadingDiv, SectionHeading } from '../../GlobalElements';
import Photo from "../../assets/images/photo.jpg";
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
    return (
        <AboutWrapper id="about">
            <HeadingDiv>
                <SectionHeading num="01">
                    About Me
                </SectionHeading>
            </HeadingDiv>
            <InnerContent>
                <AboutInfo>
                    <Paragraph>
                        Hello! I'm Samwel, I am a fresh Statistics graduate with full stack (django-react) 
                        development skills based in Dar es salaam, TZ.
                    </Paragraph>
                    <Paragraph> 
                        While specializing in data analytics, I enjoy creating things that live on the internet, 
                        whether that be websites, applications, or anything in between 
                        with the end goal of delivering exceptional software products.
                        My goal is to always build products that provide pixel-perfect, 
                        best user and performant experiences.
                    </Paragraph>
                    <Paragraph>
                        I work on a wide variety of interesting and meaningful projects on a daily basis.
                    </Paragraph>
                </AboutInfo>
                <ImageSection>
                    <ImageDiv> 
                        <AboutImage src={Photo} alt="My photo" />
                    </ImageDiv>
                </ImageSection>
            </InnerContent>
        </AboutWrapper>
    )
}

export default About
