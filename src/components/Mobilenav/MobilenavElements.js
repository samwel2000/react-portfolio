import styled from "styled-components";
import {FaTimesCircle} from 'react-icons/fa'

export const MobileNav = styled.aside`
    width: 100%;
    height: 100vh;
    position: absolute;
    left:0;
    transition-style: ease-in-out;
    transition-delay: 0s;
    transition-duration: 0.2s;
    top:${({isOpen}) => (isOpen ? '0': '-1500px')};
    right:0;
    bottom:0;
    z-index: 999;
    display: grid;
    place-items: center;
`
export const MobileWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 95%;
    margin: 0 auto;
    padding-right: 1.1rem ;
    background: var(--green-tint);
    backdrop-filter: blur( 100px );
    -webkit-backdrop-filter: blur( 100px );
    border-radius: 4px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    flex-direction: column;
    justify-content: space-between;
    align: items: center;
    border: 1.5px solid var(--green-tint);
`
export const MobileMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 0;
`
export const TimesIcon = styled(FaTimesCircle)`
    color: var(--green);
    font-size: 2.25rem;
    position: absolute;
    right: 11%;
    top: 7%;
    z-index: 9999;
    cursor: pointer;
`