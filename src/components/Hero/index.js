import React from 'react';
import {
    BioHeader,
    BioContent,
    Button,
    HeroWrapper,
    HeroIntro,
    HeroName
} from './HeroElements'

function Hero() {
    return (
        <HeroWrapper>
            <HeroIntro>Hi, my name is</HeroIntro>
            <HeroName>Samwel Godfrey.</HeroName>
            <BioHeader>I bring ideas to life</BioHeader>
            <BioContent>I'm a Statistician and a Full stack (Django - React) developer based in Tanzania, I'm specializing in data analytics, 
            with the end goal of producing quality statistics while delivering exceptional software products.
            </BioContent>
            <Button>Get in Touch</Button>
        </HeroWrapper>
    )
}

export default Hero
