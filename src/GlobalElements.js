import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: myFirstFont;
        src: url(require('./assets/fonts/Righteous-Regular.tff));
    }
    @font-face {
        font-family: mySecondFont;
        src: url(require('./assets/fonts/Merriweather-Bold.tff));
    }
    @font-face {
        font-family: myThirdFont;
        src: url(require('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Roboto+Mono&display=swap'));
    }

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
        font-family: myThirdFont;
    }
    br {
        margin-top: 5rem;
    }
    body::-webkit-scrollbar {
        width: 7px;
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--slate);
        opacity: 0.5;
        border: 2px solid var(--navy);
        border-radius: 10px;
    }
    body::-webkit-scrollbar-track {
        background: inherit;
    }
    ::selection {
        background-color: var(--lightest-navy);
        color: var(--lightest-slate);
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
        margin-top: -15px;
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
    color: var(--light-slate);
    background: var(--dark-navy);
    padding-right: 1rem;
    font-size: clamp(26px,5vw,32px);
    white-space: nowrap;

    &:before {
        content: "${props => props.num}. ";
        color: var(--green);
    }
` 