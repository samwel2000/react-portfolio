import styled from 'styled-components';
import { GrInstagram } from 'react-icons/gr';
import { 
    FiFacebook, 
    FiTwitter, 
    FiLinkedin, 
    FiGithub 
} from "react-icons/fi";

export const LeftOrientation = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 5%;
    right: auto;
    z-index: 10;
    color: var(--light-slate);

    @media screen and (max-width:768px){
        display:none;
    }
`
export const StyledSocialList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 0;

    &:after {
        content: "";
        margin-top: 20px;
        display: block;
        width: 1px;
        height: 100px;
        background-color: var(--light-slate);
    }
`
export const SocialLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    margin-top: 25px;
    transition: 1s ease-in-out;
`
export const RightOrientation = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    right: 4%;
    left: auto;
    z-index: 10;
    color: var(--light-slate);

    @media screen and (max-width:768px){
        display:none;
    }
`
export const StyledEmail = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;

    &:after {
        content: "";
        display: block;
        width: 1px;
        height: 100px;
        background-color: var(--light-slate);
    }
`
export const EmailLink = styled.a`
    text-decoration: none;
    margin: 20px auto;
    padding: 10px;
    letter-spacing: 0.1em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    cursor: pointer;
    color: var(--slate);
    letter-spacing: 3px;

    &:hover {
        text-decoration: none;
        transition: 0.2s ease-in-out;
        color: var(--green);
    }
`
export const Instagram = styled(GrInstagram)`
    color: var(--slate);
    transition: 0.2s ease-in-out;
    transform: scale(1);

    &:hover {
        color: var(--green);
        transform: scale(1.2);
        padding-bottom: 4px;
    }
`

export const Facebook = styled(FiFacebook)`
    color: var(--slate);
    transition: 0.2s ease-in-out;
    transform: scale(1);

    &:hover {
        color: var(--green);
        transform: scale(1.2);
        padding-bottom: 4px;
    }
`
export const Twitter = styled(FiTwitter)`
    color: var(--slate);
    transition: 0.2s ease-in-out;
    transform: scale(1);

    &:hover {
        color: var(--green);
        transform: scale(1.2);
        padding-bottom: 4px;
    }
`
export const Linkedin = styled(FiLinkedin)`
    color: var(--slate);
    transition: 0.2s ease-in-out;
    transform: scale(1);

    &:hover {
        color: var(--green);
        transform: scale(1.2);
        padding-bottom: 4px;
    }
`
export const Github = styled(FiGithub)`
    color: var(--slate);
    transition: 0.2s ease-in-out;
    transform: scale(1);

    &:hover {
        color: var(--green);
        transform: scale(1.2);
        padding-bottom: 4px;
    }
`