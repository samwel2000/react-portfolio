import styled, { css } from "styled-components";
import {FaBars} from 'react-icons/fa'
import { Link } from "react-scroll";

export const Nav = styled.nav`
    background: var(--dark-navy);
    height: 70px;
    position: fixed;
    top: 0;
    width: 90%;
    left: auto;
    right: auto;
`
export const NavbarWrapper = styled.div`
    padding: 1rem 0;
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const LogoWrapper = styled.div`
    display: grid;
    place-items: center;
`
export const TextLogo = styled.p`
    margin: 0;
    color: var(--green);
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0rem 0.3rem;
    border: 2px solid var(--green);
    border-radius: 5px;
    cursor: pointer;
`
export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    margin:0;
    align-items: center;
    justify-content: center;
    counter-reset: item 0;

    @media screen and (max-width:768px) {
        display: none;
    }
` 
export const NavLink = styled(Link)`
    color: var(--white);
    text-decoration: none;
    padding-left: 0.75rem;
    font-size: 1rem;
    counter-increment: item;
    cursor: pointer;

    &:hover {
        color:var(--green);
        text-decoration: none;
    }
    &:before{
        content: '0'counter(item)'.';
        color:var(--green);
    }
    ${props => props.mobile && css`
        margin-bottom: 1rem;
        font-size: 1.35rem;
    `}
` 
export const NavHamburger = styled(FaBars)`
    color: var(--green);
    font-size: 2rem;
    cursor: pointer;

    @media screen and (min-width:769px) {
        display: none;
    }
` 
export const NavButton = styled.button`
    padding: 0.25rem 0.75rem;
    color: var(--green);
    border: 1px solid var(--green);
    background: inherit;
    border-radius: 5px;
    font-size: 1.05rem;
    margin-left: 20px;
    outline:none;

    &:hover {
        background: var(--green-tint);
    }
    ${props => props.mobile && css`
        width: 50%;
        background: var(--);
        margin: 2rem auto;
        font-size: 1.35rem;
    `}
` 
