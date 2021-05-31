import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --dark-navy: #020c1b;
        --navy: #0a192f;
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
    body {
        background: var(--dark-navy);
        color: var(--light-slate);
    }
`
const MyContainer = styled.div`
    width: 90%;
    margin: auto;
`
export default MyContainer

export const SectionHeading = styled.h1`
    color: var(--light-slate);
    width: 100%;
    font-size: clamp(26px,5vw,32px);
    white-space: nowrap;
    counter-increment: section 1;

    &:before {
        content: "0"counter(section)".  ";
        color: var(--green);
    }

    &:after {
        content: "";
        display: block;
        width: 50%;
        height: 2px;
        margin-left: 150px;
        margin-top: -15px;
        background-color: var(--lightest-navy);
}
` 