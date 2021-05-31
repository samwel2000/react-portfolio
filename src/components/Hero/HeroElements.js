import styled from "styled-components";

export const HeroWrapper = styled.section`
    min-height: 89vh;
    width: 86%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content:center;

    @media screen and (max-width:768px){
        width: 100%;
    }
`
export const HeroIntro = styled.p`
    color: var(--green);
    font-size: clamp(7px,8vw,14px);
    margin:0;
`
export const HeroName = styled.h1`
    color: var(--light-slate);
    font-size: clamp(40px, 8vw, 80px);
    margin: 0;
    font-weight: 600;

    }
`
export const BioHeader = styled.h2`
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
    font-size: clamp(40px, 8vw, 80px);
`
export const BioContent = styled.h3`
    max-width: 50%;
    font-size: 1.3rem;
    margin-top: 1rem;
    line-height: 1.3;
    color: var(--slate);

    @media screen and (max-width:1000px){
        max-width: 80%;
        font-size: 1.2rem;
    }
    @media screen and (max-width:769px){
        max-width: 100%;
        font-size: 1rem;
    }
`
export const Button = styled.button`
    padding: 0.5rem 1rem;
    color: var(--green);
    border: 1px solid var(--green);
    background: inherit;
    width: 10rem;
    font-size: 1rem;
    border-radius: 5px;
    margin-top: 2rem;

    &:hover {
        background: var(--green-tint);
    }
`