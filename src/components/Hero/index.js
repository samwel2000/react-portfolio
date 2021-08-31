import axios, { HEROENDPOINT } from '../../Api';
import React, {useState, useEffect} from 'react';
import {
    BioHeader,
    BioContent,
    Button,
    HeroWrapper,
    HeroIntro,
    HeroName
} from './HeroElements'

function Hero() {
    const [herodata, setHerodata] = useState([]);

    useEffect(() => {
        axios.get(HEROENDPOINT)
        .then(res => setHerodata(res.data))
        .catch(err => console.err)
    }, [])
    return (
        <HeroWrapper id="hero">
            {herodata.map(data => (
                <div key={data.id}>
                    <HeroIntro data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">Hi, my name is</HeroIntro>
                    <HeroName data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">Samwel Godfrey.</HeroName>
                    <BioHeader data-aos="fade-in" data-aos-duration="1000" data-aos-delay="600">{data.bio_header}</BioHeader>
                    <BioContent data-aos="fade-in" data-aos-duration="1000" data-aos-delay="800">{data.bio_content}</BioContent>
                    <Button data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">Get in Touch</Button>
                </div>
            ))}
        </HeroWrapper>
    )
}

export default Hero
