import styled from "styled-components";

export const HeroWrapper = styled.section`
    min-height: 100vh;
    width: 86%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    display: flex;
    align-items: center;

    @media screen and (max-width:768px){
        width: 100%;
        min-height: 90vh;
    }
`
export const HeroIntro = styled.p`
    color: var(--green);
    font-size: clamp(9px,8vw,18px);
    padding-bottom: 0.2rem;
    margin:0;
    font-family: var(--font-mono);
`
export const HeroName = styled.h1`
    color: var(--lightest-slate);
    font-size: clamp(40px, 8vw, 80px);
    margin: 0;
    line-height:1.2;
    padding:bottom: 2px;
    font-family: var(--font-large);
    }
`
export const BioHeader = styled.h2`
    margin-top: 10px;
    color: var(--light-slate);
    font-size: clamp(40px, 8vw, 80px);
    font-family: var(--font-large);
    margin: 0;
    line-height: 1.05;
`
export const BioContent = styled.p`
    max-width: 60%;
    font-size: 1.2rem;
    color: var(--slate);
    line-height: 1.5;
    padding-top: 1rem;

    @media screen and (max-width:1000px){
        max-width: 80%;
    }
    @media screen and (max-width:769px){
        max-width: 100%;
        font-size: 1.1rem;
    }
`
export const Button = styled.button`
    padding: 0.75rem 1rem;
    color: var(--green);
    border: 1px solid var(--green);
    background: inherit;
    width: 10rem;
    font-size: 1rem;
    border-radius: 2px;
    margin-top: 1rem;
    font-family: var(--font-mono);d

    &:hover {
        background: var(--green-tint);
    }
`