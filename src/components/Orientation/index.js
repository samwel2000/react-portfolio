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
                    <SocialLink href="https://github.com/samwel2000" target="_blank" rel="noreferral noopener"><Github size="20px" /></SocialLink>
                    <SocialLink href="https://www.instagram.com/godfreysamwel_/" target="_blank" rel="noreferral noopener"><Instagram size="20px" /></SocialLink>
                    <SocialLink href="https://twitter.com/samwelgodfrey8" target="_blank" rel="noreferral noopener"><Twitter size="20px" /></SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/samwel-godfrey-96441b1ba" target="_blank" rel="noreferral noopener"><Linkedin size="20px" /></SocialLink>
                    <SocialLink href="https://facebook.com/samwel.godfrey.980" target="_blank" rel="noreferral noopener"><Facebook size="23px" /></SocialLink>
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
