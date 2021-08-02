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
    margin: 50px 0;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        margin-top: 1rem;
    }
`
export const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const Paragraph = styled.p`
    color: var(--light-slate);
    padding: 10px 0;
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
        top: 5%;
        left: 5%;
        z-index: -2;
        transition: 0.2s ease-in-out;
    }

    &:hover:after {
        top: 5.5%;
        left: 5.5%;
        transition: 0.1s ease-in-out;
    }
    @media screen and (max-width:769px){
        margin-left: auto;
    }
`
export const ImageDiv = styled.div`
    // background:var(--green-tint);
    border-radius: 5px;
    // position: relative;

    // &::after {
    //     content:"";
    //     width: 100%;
    //     height: 100%;
    //     position: absolute;
    //     border-radius: 5px;
    //     z-index: 5;
    //     top: 0;
    //     left: 0;
    //     background: var(--green);
    //     opacity: 0.3;
    //     transition: 0.5s ease-in-out;
    // }

    // &::after:hover {
    //     opacity: 0;
    // }
`
export const AboutImage = styled.img`
    width: 18rem;
    mix-blend-mode: overlay;
    transition-duration: 1s;
    border-radius: 5px;
    
    &:hover {
        mix-blend-mode: normal;
        transition-duration: 1s;
    }
`