import styled from "styled-components";

export const AboutWrapper = styled.section`
    min-height: 80vh;
    width: 76%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;

    @media screen and (max-width: 769px){
        width: 100%;
        margin-bottom: 7rem;
    }
`
export const InnerContent = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 10px;
    place-items: start;
    margin: 50px 0;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        margin-top: 1rem;
    }
`
export const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`
export const Paragraph = styled.p`
    color: var(--light-slate);
    padding: 3px 0;
    font-size: clamp(9px,5vw,18px);
    line-height: 1.4;
`

export const ImageSection = styled.div`
    display: block;
    position: relative;
    margin: auto;
    margin-left: 2rem;
    background: var(--dark-navy);
    transition: 1s ease-in-out;

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        border: 2px solid var(--green);
        border-radius: 5px;
        position: absolute;
        top: 6.5%;
        left: 6.5%;
        z-index: -2;
        transition: 0.2s ease-in-out;
    }

    &:hover:after {
        top: 5%;
        left: 5%;
        transition: 0.1s ease-in-out;
    }
    @media screen and (max-width:769px){
        margin-left: auto;
    }
`
export const ImageDiv = styled.div`
    background:var(--green-tint);
    border-radius: 5px;
`
export const AboutImage = styled.img`
    width: 15rem;
    mix-blend-mode: screen;
    transition-property: mix-blend-mode;
    transition-duration: 1s;
    border-radius: 5px;
    
    &:hover {
        mix-blend-mode: normal;
        transition-duration: 1s;
    }
    @media screen and (max-width:769px){
        width: 14rem;
    }
`