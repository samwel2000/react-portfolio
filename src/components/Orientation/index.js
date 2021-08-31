import React from 'react'
import { 
    Facebook, 
    Github, 
    Instagram, 
    Linkedin, 
    Twitter,
    LeftOrientation, 
    StyledSocialList, 
    SocialLink, 
    RightOrientation, 
    StyledEmail, 
    EmailLink 
} from './OrientationElements'

function Orientation() {
    return (
        <>
            <LeftOrientation data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                <StyledSocialList>
                    <SocialLink><Github size="20px"/></SocialLink>
                    <SocialLink><Instagram size="20px"/></SocialLink>
                    <SocialLink><Twitter size="20px"/></SocialLink>
                    <SocialLink><Linkedin size="20px"/></SocialLink>
                    <SocialLink><Facebook size="23px"/></SocialLink>
                </StyledSocialList>
            </LeftOrientation>
            <RightOrientation data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                <StyledEmail>
                    <EmailLink href="mailto:samwelgfrey@gmail.com">samwelgfrey@gmail.com</EmailLink>
                </StyledEmail>
            </RightOrientation>
        </>
    )
}

export default Orientation
