import styled from "styled-components";

export const SkillsWrapper = styled.section`
    min-height: 80vh;
    width: 66%;
    margin: auto;
    margin-top: 3rem;

    @media screen and (max-width: 769px){
        width: 100%;
        min-height: 40vh;
    }
`
export const SkillsetDiv = styled.div`
    margin-top: 2rem;
    padding: 1rem 0;
`
export const SkillSection = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`
export const Skillset = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
`
export const SkillHeading = styled.h1`
    color: var(--slate);
    opacity: 0.7;
    font-size: clamp(10px, 8vh, 20px);
    text-transform: uppercase;
    padding-bottom: 0.5rem;
`
export const SkillName = styled.h3`
    background: var(--green-tint);
    border-radius: 10px;
    color: var(--slate);
    font-size: 1.25rem;
    padding: 0.35rem 0.75rem;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: #eee;
    }
`
