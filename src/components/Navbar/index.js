import React, { useState } from 'react';
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
        console.log(isOpen)
    }
    return (
        <Nav>
            <NavbarWrapper>
                <LogoWrapper>
                    <TextLogo>SG</TextLogo>
                </LogoWrapper>
                <NavMenu>
                    <NavLink to="/">About Me</NavLink>
                    <NavLink to="/">Education</NavLink>
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
