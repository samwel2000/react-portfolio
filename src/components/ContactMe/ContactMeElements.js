import styled from 'styled-components';

export const ContactWrapper = styled.section`
    min-height: 80vh;
    width: 76%;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;

    @media screen and (max-width: 769px){
        width: 100%;
    }
` 
export const ContentWrapper = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
`
export const ContactHeader = styled.p`
    color: var(--green);
    font-size: 1rem;
    text-align: center;
    font-family: var(--font-mono);
`
export const ContactBigHeader = styled.h3`
    color: var(--lightest-slate);
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: bolder;
    text-align: center;
`
export const ContactContents = styled.p`
    color: var(--slate);
    font-size: 1.2rem;
    text-align: center;
    width: 30rem;
    padding-top: 1rem;
    margin: auto;

    @media screen and (max-width: 769px){
        width: 100%;
    }
`
export const ContactButton = styled.a`
    text-decoration: none;
    padding: 0.75rem 1rem;
    color: var(--green);
    border: 1px solid var(--green);
    background: inherit;
    text-align: center;
    width: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    font-size: 1rem;
    border-radius: 2px;
    font-family: var(--font-mono);

    &:hover {
        text-decoration: none;
        color: var(--green);
        background: var(--green-tint);
    }
`
