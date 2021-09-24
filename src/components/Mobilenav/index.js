import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios, { RESUMEENDPOINT } from '../../Api';
import { NavLink, NavButton, NavLink2 } from '../Navbar/NavbarElements'
import {
    MobileNav,
    MobileMenu,
    MobileWrapper,
    TimesIcon
} from './MobilenavElements'

function Mobilenav({ isOpen, HandleClick }) {
    const [resume, setResume] = useState([])
    
    useEffect(() => {
        axios.get(RESUMEENDPOINT)
        .then(res => setResume(res.data))
        .catch(err => console.log(err))
    }, [])

    const currentUrlLocation = useLocation();

    return (
        <MobileNav onClick={HandleClick} isOpen={isOpen}>
            <TimesIcon />
            <MobileWrapper>
                {currentUrlLocation.pathname === "/" ?
                    <MobileMenu>
                        <NavLink to="about" mobile="true" onClick={HandleClick} spy={true} smooth={true} offset={-100} delay={300} duration={1000} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">About Me</NavLink>
                        <NavLink to="experience" mobile="true" onClick={HandleClick} spy={true} data-aos="fade-in" smooth={true} offset={-100} delay={300} duration={1000} data-aos-duration="1000" data-aos-delay="400">Experience</NavLink>
                        <NavLink to="skills" mobile="true" onClick={HandleClick} spy={true} smooth={true} offset={-100} delay={300} duration={1000} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">My skills</NavLink>
                        <NavLink to="projects" mobile="true" onClick={HandleClick} spy={true} smooth={true} offset={-100} delay={300} duration={1000} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">Work</NavLink>
                        <NavLink2 to="blog" mobile="true" onClick={HandleClick} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="600">Blog</NavLink2>
                        <NavLink to="contact" mobile="true" onClick={HandleClick} spy={true} smooth={true} offset={-100} delay={300} duration={1000} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="600">Contact</NavLink>
                    </MobileMenu>
                    :
                    <MobileMenu>
                        <NavLink2 to="/" mobile="true" onClick={HandleClick} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">Home</NavLink2>
                        <NavLink2 to='/blog' mobile="true" onClick={HandleClick} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">Blog</NavLink2>
                        <NavLink2 to="/archive" mobile="true" onClick={HandleClick} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">Archive</NavLink2>
                    </MobileMenu>
                }
                <NavButton 
                    href={resume.map(file => `${file.file}`)} 
                    target="_blank" rel="noreferrer noopener" 
                    data-aos="fade-in" data-aos-duration="1000" 
                    data-aos-delay="700" 
                    mobile="true"
                    download="SAMWEL-GODFREY resume"
                    >
                        Resume
                </NavButton>
            </MobileWrapper>
        </MobileNav>
    )
}

export default Mobilenav
