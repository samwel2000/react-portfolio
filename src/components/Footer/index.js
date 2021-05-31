import React from 'react';
import { 
    Facebook, 
    Github, 
    Instagram, 
    Linkedin, 
    Twitter, 
} from '../Orientation/OrientationElements';
import {FooterWrapper,FooterItem,ExtraFooter, FooterEmail,SocialLink} from './FooterElements'

function Footer() {
    return (
        <FooterWrapper>
            <ExtraFooter>
                <FooterItem><SocialLink><Github size="20px"/></SocialLink></FooterItem>
                <FooterItem><SocialLink><Instagram size="20px"/></SocialLink></FooterItem>
                <FooterItem><SocialLink><Twitter size="20px"/></SocialLink></FooterItem>
                <FooterItem><SocialLink><Linkedin size="20px"/></SocialLink></FooterItem>
                <FooterItem><SocialLink><Facebook size="25px"/></SocialLink></FooterItem>
            </ExtraFooter>
            <FooterEmail>samwelgfrey@gmail.com</FooterEmail>
        </FooterWrapper>
    )
}

export default Footer
