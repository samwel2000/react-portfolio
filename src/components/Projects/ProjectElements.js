import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ProjectsWrapper =  styled.section`
    min-height: 70vh;
    width: 86%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:768px){
        min-height: 60vh;
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
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 6rem 0.5rem;
    margin-top: 0;
    margin-bottom: 6rem;

    @media screen and (max-width: 769px) {
        height: 60vh;
        padding: 0;
        margin: 3rem 0.5rem;
        margin-top: 0;
        margin-bottom: 3rem;
    }
    ${props => props.right && css`
        justify-content: flex-start;
    `}
`

export const ImageDiv= styled.div`
    width: 60%;
    height: 100%;
    position: relative;
    border-radius: 5px;
    z-index: 0;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 5px;
        z-index: 2;
        inset: 0;
        opacity: 0.3;
        transition-duration: 0.5s;
        background: var(--green);
    }

    &:hover:after {
        opacity: 0;
    }

    @media screen and (max-width:769px){
        width: 100%;
        border-radius: 0px;
        border: none;

        &::after {
            opacity: 0.98;
            background: var(--light-navy);
            border-radius: 0;
        }
    }
`
export const Image= styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;

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
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    ${props => props.right && css`
        right: 0;
        left: 50%;
    `}
`
export const ProjectType = styled.p`
    font-size: 0.95rem;
    color: var(--green);
    padding: 0;
    padding-bottom: 0.25rem;
    margin: 0;
    font-family: var(--font-mono);

    ${props => props.right && css`
        text-align: right;
    `}

    @media screen and (max-width:769px){
        text-align: left;
        padding-bottom: 0.4rem;
    }
`
export const ProjectHeading = styled.h3`
    text-align: left;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.75rem;
    padding-bottom: 0.2rem;
    color: var(--lightest-slate);
    font-family: 'Quicksand', sans-serif;
    transition-duration: 0.2s;

    &:hover {
        color: var(--green);
    }

    @media screen and (max-width:769px){
        text-align: left;
        padding: 0;
    }
    ${props => props.right && css`
        text-align: right;
    `}
`
export const ProjectParagraph = styled.p`
    text-align: left;
    font-size: 1rem;
    line-height: 1.5;
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
    ${props => props.right && css`
        text-align: right;
    `}
`
export const ProjectStack = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    gap: 2rem;
    cursor: default;
    justify-content: flex-start;
    flex-wrap:wrap;

    ${props => props.right && css`
        justify-content: flex-end;
    `}

    @media screen and (max-width:769px){
        gap: 1rem;
        padding: 0;
        justify-content: flex-start;
    }
`
export const ProjectLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    ${props => props.right && css`
        justify-content: flex-end;
    `}

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

export const ViewMoreWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2rem;

    @media screen and (max-width:769px){
        margin-top: 0;
    }
`

export const ViewMore = styled(Link)`
    text-decoration: none;
    color: var(--green);
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 1.5px;
    transition-timing-function: cubic-bezier(.16,.67,.83,.67);
    transition-duration: 0.2s;

    &:hover {
        text-decoration: underline;
        color: var(--green);
        font-size: 1.2rem;
    }
`
