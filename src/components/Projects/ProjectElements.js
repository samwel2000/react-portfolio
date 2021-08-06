import styled from "styled-components";

export const ProjectsWrapper =  styled.section`
    min-height: 70vh;
    width: 86%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:768px){
        min-height: 40vh;
        width: 100%;
    }
`
export const ProjectWrapper = styled.div`
    display: flex;
    height: 60vh;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    @media screen and (max-width: 769px) {
        height: 60vh;
    }
`

export const ImageDiv= styled.div`
    width: 60%;
    height: 100%;
    position: relative;
    border-radius: 10px;
    z-index: 0;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 10px;
        z-index: 2;
        inset: 0;
        opacity: 0.5;
        background: var(--green);
    }

    @media screen and (max-width:769px){
        width: 100%;
        border-radius: 0px;
        border: none;

        &::after {
            opacity: 0.9;
            background: var(--dark-navy);
            border-radius: 0;
        }
    }
`
export const Image= styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;

    @media screen and (max-width:769px){
        border-radius: 0px;
        border: none;
    }
`
export const ProjectContent = styled.div`
    position: absolute;
    width: 50%;
    padding: 1rem 2rem;
    z-index: 3;
    left: 0;
    right: 40%;

    @media screen and (max-width:769px){
        background: transparent;
        left: 0;
        margin: 0;
        padding: 0;
        padding: 1.5rem 1rem;
        width: 100%;
    }
`
export const ProjectType = styled.p`
    font-size: 0.95rem;
    color: var(--green);
    padding: 0;
    padding-bottom: 0.5rem;
    margin: 0;
    font-family: 'Roboto Mono', monospace;

    @media screen and (max-width:769px){
        text-align: left;
    }
`
export const ProjectHeading = styled.h3`
    text-align: right;
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    color: var(--lightest-slate);
    font-family: 'Quicksand', sans-serif;

    @media screen and (max-width:769px){
        text-align: left;
        padding: 0;
        padding-bottom: 1.3rem;
    }
`
export const ProjectParagraph = styled.p`
    text-align: right;
    text-align: left;
    font-size: 1rem;
    color: var(--light-slate);
    padding: 1.3rem;
    margin-top: 0.5rem;
    background: var(--light-navy);
    border-radius: 5px;
    font-family: 'Quicksand', sans-serif;

    @media screen and (max-width:769px){
        text-align: left;
        background: transparent;
        padding: 0;
        border-radius: 0px;
        border: none;
    }
`
export const ProjectStack = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    gap: 2rem;
    cursor: arrow;
    justify-content: flex-end;
    justify-content: flex-start;

    @media screen and (max-width:769px){
        gap: 1rem;
        padding: 0;
    }
`
export const ProjectLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    @media screen and (max-width:769px){
        justify-content: flex-start;
    }
`
export const ProjectLink = styled.a`
    font-size: 1.3rem;
    color: var(--light-slate);

    :hover {
        color: var(--lightest-slate);
    }
`
