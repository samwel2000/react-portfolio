import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const BlogWrapper = styled.section`
    width: 86%;
    margin: 0 auto;
    min-height: 65vh;
    margin-top: 5rem;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column-reverse;

        ${props => props.column && css`
            flex-direction: column;
        `}
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
export const BlogLink2 = styled(Link)`
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
    @media screen and (max-width:600px){
        max-height: 9.9rem;
    }
`
export const BlogHeadingDetail = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: var(--lightest-slate);
    letter-spacing: 1.5px;

    &:hover {
        color: var(--green);
    }

    @media screen and (max-width:400px){
        font-size: 1.2rem;
    }
`
export const BlogDescription = styled.p`
    font-size: 1.1rem;
    line-height: 1.5;
    overflow: hidden;
    max-height: 3.4rem;
    color: var(--light-slate);
    text-overflow: ellipsis;
    cursor: pointer;

    @media screen and (max-width:600px){
        max-height: 7rem;
    }
`
export const BlogDetailContainer = styled.li`
    width: 100%;
`
export const BlogDetailImage = styled.img`
    width: 100%;
    max-height: 70vh;
    object-fit: contain;
`
export const TagList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`
export const Tag = styled.li`
    background: var(--green-tint);
    padding: 0.5px 9px;
    border-radius: 10px;
    white-space: nowrap;
    cursor: pointer;
    font-family:var(--font-mono);

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
    font-family:var(--font-mono);
    letter-spacing: 2px;
`
export const SectionList = styled.ul`
    list-style-type: none;
`
export const ListElement = styled(Link)`
    color: var(--lightest-slate);
    cursor: pointer;
    display: block;
    font-size: 1rem;
    text-decoration: none;
    text-transform: capitalize;
    padding-bottom: 0.35rem;
    transition-duration: 0.2s;

    &:before {
        content: "▹ ";
        color: var(--green);
    }
    &:hover {
        color: var(--green);
        text-decoration: none;
    }
`
export const SectionList2 = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`
export const ListElement2 = styled(Link)`
    padding: 6px 10px;
    text-decoration: none;
    color: var(--lightest-slate);
    background: rgba(2,12,27,0.4);
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;

    &:hover {
        text-decoration: none;
        color: var(--green);
        background: rgba(2,12,27,0.6);
    }
`
export const SubscriptionWrapper = styled.section`
    display: grid;
    place-items: center;
    margin: 1.5rem 0 0.5rem 0;
    width: 73%;

    @media screen and (max-width:1000px){
        width: 100%;
        margin: 1.5rem auto;
    }
`
export const SubscriptionHeading = styled.p`
    font-size: 1.2rem;
    padding: 1rem 0 0 0;
    text-align: center;
    line-height: 1.6;
`
export const Form = styled.form`
    display: flex;
    justify-content:center;

    @media screen and (max-width:679px) {
        width: 100%;
    }
`
export const InputWrapper = styled.div`
    position: relative;
    width: calc(100%  10rem);
`
export const InputLabel = styled.label`
    position: absolute;
    // background: rgba(2,12,27,0.2);
    text-align: center;
    color: green;
    font-size: 1.3rem;
    top: 1px;
    left: 1px;
    padding: 0.1rem 0.4rem 0.3rem 0.4rem;
    border-radius: 5px;
`
export const Input = styled.input`
    outline:none;
    width: 280px;
    background: var(--green-tint);
    font-size: 1rem;
    padding: 0.5rem 0.25rem 0.5rem 2.6rem;
    color: var(--light-slate);
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    @media screen and (max-width:678px) {
        width: 100%;
    }
`
export const InputSubmit = styled.input`
    outline:none;
    background: inherit;
    font-size: 1rem;
    padding: 0 0.85rem;
    color: var(--light-slate);
    border: 2px solid var(--green-tint);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    &:hover, &:focus {
        background: rgba(2,12,27,0.8);
        color: var(--lightest-slate);
    }

    @media screen and (max-width:678px) {
        width: 10rem;
    }
`
export const NoBlog = styled.h3`
    color: var(--light-slate);
    text-align: center;
    height: '190px';
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
`
export const InfoDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0;
` 
export const InfoDivInner = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-family: var(--font-mono);
    color: var(--slate);
    padding-bottom: 1rem;
    gap: 0.3rem;
` 


