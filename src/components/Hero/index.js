// import axios from '../../Api';
import React, {useEffect} from 'react';
import {
    BioHeader,
    BioContent,
    Button,
    HeroWrapper,
    HeroIntro,
    HeroName
} from './HeroElements'

function Hero() {
    useEffect(() => {
        // Option one
        // axios.get('posts/')
        // .then(res => {
        //     console.log(res.data)
        // }).catch(error => {
        //     console.log("my error -->",error)
        // })

        // const GetPosts = async () => {
        //     const response = await axios.get('posts/')
        //     console.log(response)
        //     console.log(response.data)
        // }
        // GetPosts();
    }, [])
    return (
        <HeroWrapper id="hero">
            <HeroIntro>Hi, my name is</HeroIntro>
            <HeroName>Samwel Godfrey.</HeroName>
            <BioHeader>A tech and data Ethusiast</BioHeader>
            <BioContent>I'm a Statistician and a Full stack (Django - React) developer based in Tanzania, I'm specialized in data analytics, 
            while excelling in developing exceptional software products.
            </BioContent>
            <Button>Get in Touch</Button>
        </HeroWrapper>
    )
}

export default Hero
