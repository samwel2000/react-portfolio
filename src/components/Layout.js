import React, {useState} from 'react';
import Navbar from './Navbar';
import Orientation from './Orientation';
import MyContainer from '../GlobalElements';
import Footer from './Footer';
import { FooterInfo, FooterLink } from './Footer/FooterElements';


function Layout(props) {
    const [scrolled, setscrolled] = useState(false)

    const scrollingFunction = () => {
        // if (window.scrollY > 50) {
            setscrolled(true)
        // }
    }

    return (
        <MyContainer onScroll={scrollingFunction}>
            <header>
                <Navbar scrolled={scrolled} />
            </header>

            <main>
                <Orientation />

                {props.children}

            </main>

            <footer>
                <Footer />
                <div className="pb-3">
                    <FooterInfo><FooterLink href="tel:+255734157686">+255734157686</FooterLink> / <FooterLink href="tel:+255652068080">+255652068080</FooterLink></FooterInfo>
                    <FooterInfo>Developed by Samwel Godfrey</FooterInfo>
                </div>
            </footer>

        </MyContainer>
    )
}

export default Layout
