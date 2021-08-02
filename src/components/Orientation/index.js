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
            <LeftOrientation>
                <StyledSocialList>
                    <SocialLink><Github size="17px"/></SocialLink>
                    <SocialLink><Instagram size="17px"/></SocialLink>
                    <SocialLink><Twitter size="17px"/></SocialLink>
                    <SocialLink><Linkedin size="17px"/></SocialLink>
                    <SocialLink><Facebook size="20px"/></SocialLink>
                </StyledSocialList>
            </LeftOrientation>
            <RightOrientation>
                <StyledEmail>
                    <EmailLink href="mailto:samwelgfrey@gmail.com">samwelgfrey@gmail.com</EmailLink>
                </StyledEmail>
            </RightOrientation>
        </>
    )
}

export default Orientation
