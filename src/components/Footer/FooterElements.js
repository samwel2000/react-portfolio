import styled, {css} from "styled-components"

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 90%;
    padding: 1rem;
    margin: auto;
    margin-top: 2rem;

    @media screen and (min-width:769px){
        display:none;
    }
`
export const FooterEmail = styled.a`
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.1em;
    cursor: pointer;
    color: var(--light-slate);

    &:hover {
        text-decoration: none;
        transition: 0.2s ease-in-out;
        color: var(--green);
    }
`
export const FooterInfo = styled.p`
    font-size: 1rem;
    padding: 0;
    margin: 0;
    padding-bottom: 0.25rem;
    text-align: center;
    cursor: default;  
`
export const FooterSection = styled.div`
    padding: 0.5rem 2rem 1rem 2rem;

    ${props => props.blog && css`
        width: 73%;

        @media screen and (max-width:1000px){
            width: 100%;
            margin: auto;
        }
    `}
`
export const FooterLink = styled.a`
    text-decoration: none;
    color: var(--slate);

    &:hover {
        color: var(--light-slate);
        text-decoration: none;
    }
`
export const ExtraFooter = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: -1rem;
`
export const FooterItem = styled.li`
color: var(--light-slate);
transition: 0.2s ease-in-out;
margin-left: 0.5rem;
transform: scale(1);

&:hover {
    color: var(--green);
    transform: scale(1.4);
    padding-bottom: 4px;
}
`
export const SocialLink = styled.a`
    text-decoration: none;
    margin-right: 0.75rem;
    transition: 1s ease-in-out;
`