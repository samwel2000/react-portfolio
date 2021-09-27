import styled, { css } from "styled-components";
import { FaBars } from 'react-icons/fa'
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    background: var(--dark-navy);
    height: 70px;
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    z-index: 10;
    transition-delay: 0.1s;
    transition-duration: 0.3s;

    ${props => props.shadow && css`
        box-shadow: 0px 3px 4px var(--navy-shadow);
    `}
`
export const NavbarWrapper = styled.div`
    padding: 1.5rem 0;
    margin: 0 auto;
    height: 100%;
    width: 90%;
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
    gap: 1.5rem;
    counter-reset: item 0;

    @media screen and (max-width:768px) {
        display: none;
    }
`
export const NavLink = styled(LinkS)`
    color: var(--white);
    text-decoration: none;
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
export const NavLink2 = styled(Link)`
    color: var(--white);
    text-decoration: none;
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
export const NavButton = styled.a`
    padding: 0.35rem 0.95rem;
    color: var(--green);
    border: 1px solid var(--green);
    background: inherit;
    border-radius: 5px;
    font-size: 1rem;
    margin-left: 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background: var(--green-tint);
        text-decoration: none;
        color: var(--green);
    }
    ${props => props.mobile && css`
        width: 50%;
        background: var(--);
        margin: 2rem auto;
        font-size: 1.35rem;
    `}
`
