import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Mobilenav from '../Mobilenav';
import { 
    Nav,
    NavbarWrapper, 
    LogoWrapper, 
    NavMenu, 
    NavLink, 
    NavHamburger, 
    NavButton,
    TextLogo, 
} from './NavbarElements'

function Navbar({scrolled}) {
    const [isOpen, setisOpen] = useState(false)

    console.log(scrolled)
    const HandleClick = () => {
        setisOpen(!isOpen)
    }
    return (
        <Nav scrolled={scrolled}>
            <NavbarWrapper>
                <LogoWrapper data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
                    <TextLogo><Link to="hero">SG</Link></TextLogo>
                </LogoWrapper>
                <NavMenu>
                    <NavLink to="about" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">About Me</NavLink>
                    <NavLink to="skills" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">My skills</NavLink>
                    <NavLink to="/" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">Experience</NavLink>
                    <NavLink to="/" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">Work</NavLink>
                    <NavLink to="/" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="600">Contact</NavLink>
                    <NavButton data-aos="fade-in" data-aos-duration="1000" data-aos-delay="700">Resume</NavButton>
                </NavMenu>
                <NavHamburger onClick={HandleClick} />
            </NavbarWrapper>
            <Mobilenav isOpen={isOpen} HandleClick={HandleClick} />
        </Nav>
    )
}

export default Navbar
