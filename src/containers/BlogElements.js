import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogWrapper = styled.section`
    width: 86%;
    margin: 0 auto;
    min-height: 70vh;
    margin-top: 5rem;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column-reverse;
    }
    @media screen and (max-width:768px){
        width: 100%;
    }
`
export const BlogsSection = styled.ul`
    list-style: none;
    padding-top: 1rem;
    width: 73%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`
export const BlogLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: none;
        color: inherit;
    }
`
export const BlogContent = styled.li`
    display: flex;
    background: rgba(2,12,27,0.5);
    gap: 1rem;
    padding: 1.25rem 1rem;
    margin-bottom: 2rem;
    border-radius: 7px;
    cursor: pointer;
    position: relative;

    &:hover {
        background: rgba(2,12,27,0.7);
    }

    @media screen and (max-width: 601px){
        flex-direction: column;
    }
`
export const ImageDiv = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 7px;
    cursor: pointer;
    background: var(--green-tint);

    @media screen and (max-width:601px) {
        width: 100%;
        height: 15rem;
    }
`
export const BlogImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
    mix-blend-mode: soft-light;

    &:hover {
        mix-blend-mode: normal;
    }
`
export const BlogContent2 = styled.div`
    width: calc(100% - 10rem);

    @media screen and (max-width:601px) {
        width: 100%;
    }
`
export const BlogHeading = styled.h2`
    font-weight: bold;
    font-size: 1.35rem;
    line-height: 1.4;
    color: var(--white);
    max-height: 3.7rem;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        color: var(--green);
    }
`
export const BlogDescription = styled.p`
    font-size: 1.1rem;
    line-height: 1.5;
    overflow: hidden;
    max-height: 3.4rem;
    white-space: nowrap;
    color: var(--light-slate);
    text-overflow: ellipsis;
    cursor: pointer;
`
export const TagList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`
export const Tag = styled.li`
    background: var(--green-tint);
    padding: 0px 9px;
    border-radius: 10px;
    white-space: nowrap;
    cursor: pointer;

    &:before {
        content: "# ";
    }

    &:hover {
        color: var(--white);
    }
`
export const DirectiveSection = styled.div`
    width: 18%;
    position: fixed;
    right: 10%;
    top: 6rem;

    @media screen and (max-width: 1000px) {
        height: auto;
        min-height: auto;
        position: relative;
        width: 100%;
        inset: 0;
    }
`
export const LatestSection = styled.div`
    border: 1px solid var(--green);
    background: var(--green-tint);
    padding: 1rem 1rem 0.5rem 1rem;
    margin-bottom: 2rem;
    border-radius: 5px;
`
export const FiltersSection = styled.div`
    border: 1px solid var(--green);
    background: var(--green-tint);
    padding: 1rem 1rem 0.5rem 1rem;
    margin-bottom: 2rem;
    border-radius: 5px;
`
export const DirHeading = styled.h3`
    text-align: center;
    text-transform: uppercase;
    color: var(--green);
    font-size: 1rem;
    font-weight: 600;
    padding-bottom: 0.25rem;
`
export const SectionList = styled.ul`
    list-style-type: none;
`
export const ListElement = styled.li`
    color: var(--lightest-slate);
    cursor: pointer;
    font-size: 1rem;
    text-transform: capitalize;
    padding-bottom: 0.25rem;
    transition-duration: 0.2s;

    &:before {
        content: "▹ ";
        color: var(--green);
    }
    &:hover {
        color: var(--green);
    }
`
export const SectionList2 = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`
export const ListElement2 = styled.li`
    padding: 6px 10px;
    background: rgba(2,12,27,0.4);
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;

    &:hover {
        color: var(--green);
        background: rgba(2,12,27,0.6);
    }
`

