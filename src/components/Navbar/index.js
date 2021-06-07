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

function Navbar() {
    const [isOpen, setisOpen] = useState(false)

    const HandleClick = () => {
        setisOpen(!isOpen)
    }
    return (
        <Nav>
            <NavbarWrapper>
                <LogoWrapper>
                    <TextLogo><Link to="hero">SG</Link></TextLogo>
                </LogoWrapper>
                <NavMenu>
                    <NavLink to="about">About Me</NavLink>
                    <NavLink to="skills">My skills</NavLink>
                    <NavLink to="/">Experience</NavLink>
                    <NavLink to="/">Work</NavLink>
                    <NavLink to="/">Contact</NavLink>
                    <NavButton>Resume</NavButton>
                </NavMenu>
                <NavHamburger onClick={HandleClick} />
            </NavbarWrapper>
            <Mobilenav isOpen={isOpen} HandleClick={HandleClick} />
        </Nav>
    )
}

export default Navbar
