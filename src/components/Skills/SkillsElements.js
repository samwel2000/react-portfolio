import styled from "styled-components";

export const SkillsWrapper = styled.section`
    min-height: 100vh;
    width: 66%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 769px){
        width: 100%;
    }
`
export const SkillsetDiv = styled.div`
    margin-top: 2rem;
    padding: 1rem 0;
`
export const SkillSection = styled.div`
    width: 100%;
`
export const Skillset = styled.div`
    background: var(--green-tint);
    border-radius: 10px;
    width: auto;
    min-width: 9rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;

    &:not(last-child){
        margin-right: 1rem;
    }

    @media screen and (max-width:360px){
        min-width: 7rem;
    }
`
export const SkillHeading = styled.h1`
    color: var(--slate);
    opacity: 0.7;
    font-size: clamp(10px, 8vh, 20px);
    text-transform: uppercase;
    padding-bottom: 0.5rem;
`
export const SkillName = styled.figcaption`
    font-size: 1.05rem;
`
export const Skill = styled.figure`
    color: var(--slate);
    font-size: 2.5rem;
    text-align: center;
`
