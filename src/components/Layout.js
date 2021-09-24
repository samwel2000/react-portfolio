import Navbar from './Navbar';
import Orientation from './Orientation';
import MyContainer from '../GlobalElements';
import Footer from './Footer';
import { FooterInfo, FooterLink, FooterSection } from './Footer/FooterElements';


function Layout(props) {
    
    return (
        <MyContainer>
            <header>
                <Navbar />
            </header>

            <main>
                <Orientation />

                {props.children}

            </main>

            <footer>
                <Footer />
                <FooterSection blog={props.blog}>
                    <FooterInfo><FooterLink href="tel:+255734157686">+255734157686</FooterLink> / <FooterLink href="tel:+255652068080">+255652068080</FooterLink></FooterInfo>
                    <FooterInfo>Developed by Samwel Godfrey</FooterInfo>
                </FooterSection>
            </footer>

        </MyContainer>
    )
}

export default Layout
