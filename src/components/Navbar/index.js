import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import axios, { RESUMEENDPOINT } from '../../Api';
import Mobilenav from '../Mobilenav';
import {
    Nav,
    NavbarWrapper,
    LogoWrapper,
    NavMenu,
    NavLink,
    NavLink2,
    NavHamburger,
    NavButton,
    TextLogo,
} from './NavbarElements'

function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    const [resume, setResume] = useState([]);
    const [scrolled, setscrolled] = useState(false)

    useEffect(() => {
        axios.get(RESUMEENDPOINT)
            .then(res => setResume(res.data))
            .catch(err => console.log(err));

        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                setscrolled(true)
            } else {
                setscrolled(false)
            }
        })
    }, [])

    const HandleClick = () => {
        setisOpen(!isOpen)
    }

    const currentUrlLocation = useLocation();

    return (
        <Nav shadow={scrolled}>
            <NavbarWrapper>
                <LogoWrapper data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
                    <TextLogo><Link to="hero" smooth={true} offset={-100}
                        delay={300} duration={1000} >SG</Link></TextLogo>
                </LogoWrapper>
                {currentUrlLocation.pathname === "/" ?
                    <NavMenu>
                        <NavLink to="about"
                            spy={true} smooth={true} offset={-100}
                            delay={300} duration={1000}
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="200">About Me</NavLink>
                        <NavLink to="experience"
                            spy={true} smooth={true} offset={-100}
                            delay={300} duration={1000}
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="500">Experience</NavLink>
                        <NavLink to="skills"
                            spy={true} smooth={true} offset={-100}
                            delay={300} duration={1000}
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="300">My skills</NavLink>
                        <NavLink to="projects"
                            spy={true} smooth={true} offset={-100}
                            delay={300} duration={1000}
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="400">Work</NavLink>
                        <NavLink2 to="blog"
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="600">Blog</NavLink2>
                        <NavLink to="contact"
                            spy={true} smooth={true} offset={-100}
                            delay={300} duration={1000}
                            data-aos="fade-in"
                            data-aos-duration="1000"
                            data-aos-delay="600">Contact</NavLink>
                        <NavButton
                            href={resume.map(file => `${file.file}`)}
                            target="_blank" rel="noreferrer noopener"
                            data-aos="fade-in" data-aos-duration="1000"
                            data-aos-delay="700"
                            download="SAMWEL-GODFREY resume"
                        >
                            Resume
                        </NavButton>
                    </NavMenu>
                    :
                    <NavMenu>
                        <NavLink2 to="/" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">Home</NavLink2>
                        <NavLink2 to='/blog' data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">Blog</NavLink2>
                        <NavLink2 to="/archive" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">Archive</NavLink2>
                        <NavButton
                            href={resume.map(file => `${file.file}`)}
                            target="_blank" rel="noreferrer noopener"
                            data-aos="fade-in" data-aos-duration="1000"
                            data-aos-delay="700"
                            download="SAMWEL-GODFREY resume"
                        >
                            Resume
                        </NavButton>
                    </NavMenu>
                }
                <NavHamburger onClick={HandleClick} />
            </NavbarWrapper>
            <Mobilenav isOpen={isOpen} HandleClick={HandleClick} />
        </Nav>
    )
}

export default Navbar
