import React from 'react';
import {NavLink, NavButton} from '../Navbar/NavbarElements'
import { 
    MobileNav,
    MobileMenu,
    MobileWrapper,
    TimesIcon
} from './MobilenavElements'

function Mobilenav({isOpen, HandleClick}) {
    return (
        <MobileNav onClick={HandleClick} isOpen={isOpen}>
            <TimesIcon />
            <MobileWrapper>
                <MobileMenu>
                    <NavLink to="/" mobile="true" onClick={HandleClick}>About Me</NavLink>
                    <NavLink to="/" mobile="true" onClick={HandleClick}>Education</NavLink>
                    <NavLink to="/" mobile="true" onClick={HandleClick}>Experience</NavLink>
                    <NavLink to="/" mobile="true" onClick={HandleClick}>Work</NavLink>
                    <NavLink to="/" mobile="true" onClick={HandleClick}>Contact</NavLink>
                </MobileMenu>
                <NavButton mobile="true">Resume</NavButton>
            </MobileWrapper>
        </MobileNav>
    )
}

export default Mobilenav
