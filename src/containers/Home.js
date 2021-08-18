import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar  from '../components/Navbar';
import Orientation from '../components/Orientation';
import MyContainer from '../GlobalElements';
import { FooterInfo } from '../components/Footer/FooterElements'
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Project from '../components/Projects';
import ContactMe from '../components/ContactMe';

function Home() {
    return (
        <MyContainer>
            <header>
                <Navbar />
            </header>
            <main>

                <Orientation />

                <Hero />

                <About />

                <Experience />

                <Skills />

                <Project />

                <ContactMe />

            </main>
            <footer>
                <Footer />
                <div className="py-3">
                    <FooterInfo>+255734157686 / +255652068080</FooterInfo>
                    <FooterInfo>Developed by Samwel Godfrey</FooterInfo>
                </div>
            </footer>

        </MyContainer>
    )
}

export default Home
