import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --navy: #020c1b;
        --dark-navy: #0a192f;
        --light-navy: #112240;
        --lightest-navy: #233554;
        --navy-shadow: rgba(2,12,27,0.7);
        --slate: #8892b0;
        --light-slate: #a8b2d1;
        --lightest-slate: #ccd6f6;
        --white: #e6f1ff;
        --green: #64ffda;
        --green-tint: rgba(100,255,218,0.1);
        --font-mono: 'Roboto Mono', monospace;
        --font-large: 'Raleway', sans-serif;
    }
    html {
        scroll-behaviour: smooth;
    }
    body {
        background: var(--dark-navy);
        color: var(--light-slate);
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        line-height: 1.3;
        font-family: 'Quicksand', sans-serif;
    }
    br {
        margin-top: 5rem;
    }
    body::-webkit-scrollbar{
        width: 7px;
    }
    body::-webkit-scrollbar-thumb{
        background-color: var(--slate);
        opacity: 0.5;
        border: 2px solid var(--navy);
        border-radius: 10px;
    }
    body::-webkit-scrollbar-track,
    pre::-webkit-scrollbar-track {
        background: inherit;
    }
    ::selection {
        background-color: var(--lightest-navy);
        color: var(--lightest-slate);
    }
    .blog__detail {
        width: 100%;
        color: var(--light-slate);
        letter-spacing: 1.8px;
    }
    pre::-webkit-scrollbar{
        height: 5px;
    }
    pre::-webkit-scrollbar-thumb{
        background-color: var(--slate);
        opacity: 0.5;
        border: 0.1px solid var(--navy);
        border-radius: 10px;
    }
    .blog__detail a {
        color: inherit;
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: var(--green);

        &:hover {
            color: var(--green);
        }
    }
    .blog__detail pre {
        width: 100%;
        padding: 1rem;
        background: var(--light-slate);
        // color: black;
        font-weight: 600;
        overflow-x: scroll;
    }
    .blog__detail > ul {
        width: 100%;
        padding: 1rem 1.4rem;
    }
`
const MyContainer = styled.div`
    width: 90%;
    margin: auto;
`
export default MyContainer

export const HeadingDiv = styled.div`
    &:after {
        content: "";
        display: block;
        width: 70%;
        height: 2px;
        margin-top: -13px;
        background-color: var(--lightest-navy);
    }

    @media screen and (max-width: 550px){
        &:after {
            width: 100%;
        }
    }
`
export const SectionHeading = styled.h1`
    display: inline;
    color: var(--lightest-slate);
    background: var(--dark-navy);
    padding-right: 1rem;
    font-size: clamp(20px,5vw,24px);
    white-space: nowrap;
    font-weight: 600;
    letter-spacing: 1.5px;

    &:before {
        content: "${props => props.num}.";
        color: var(--green);
        font-size: clamp(15px,5vw,20px);
        font-family: var(--font-mono);
        font-weight: normal;
    }
`
