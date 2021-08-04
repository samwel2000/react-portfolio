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
    height: 70vh;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    @media screen and (max-width: 769px) {
        height: 50vh;
    }
`

export const ImageDiv= styled.div`
    width: 70%;
    height: 100%;
    position: relative;
    border-radius: 15px;
    z-index: 0;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 15px;
        z-index: 2;
        inset: 0;
        opacity: 1;
        background: var(--green-tint);
    }

    @media screen and (max-width:769px){
        width: 100%;
    }
`
export const Image= styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`
export const ProjectContent = styled.div`
    position: absolute;
    width: 60%;
    padding: 1rem 2rem;
    z-index: 3;
    left: 0;
    right: 40%;

    @media screen and (max-width:769px){
        background: transparent;
        left: 0;
        width: 100%;
    }
`

export const ProjectHeading = styled.h3`
    text-align: right;
    text-align: left;
    font-weight: 600;
    font-size: 1.3rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: var(--lightest-slate);

    @media screen and (max-width:769px){
        text-align: center;
        padding: 0;
    }
`
export const ProjectParagraph = styled.p`
    text-align: right;
    text-align: left;
    font-size: 1rem;
    color: var(--light-slate);
    padding: 1rem;
    margin-top: 0.5rem;
    background: var(--light-navy);
    border-radius: 15px;

    @media screen and (max-width:769px){
        text-align: center;
        background: transparent;
    }
`
export const ProjectStack = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    gap: 2rem;
    justify-content: flex-end;
    justify-content: flex-start;

    @media screen and (max-width:769px){
        justify-content: center;
        gap: 1rem;
        padding: 0;
    }
`