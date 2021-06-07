import styled from "styled-components"

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 90%;
    padding: 1rem;
    margin: auto;
    margin-top: 2rem;

    @media screen and (min-width:768px){
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
    color: var(--slate);
    font-size: 1rem;
    text-align: center;
`
export const ExtraFooter = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
`
export const FooterItem = styled.li`
color: var(--light-slate);
transition: 0.2s ease-in-out;
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