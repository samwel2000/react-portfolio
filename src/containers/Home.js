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

                <Skills />

                <Experience />

            </main>
            <footer>
                <Footer />
                <FooterInfo>Designed and Developed by me</FooterInfo>
            </footer>

        </MyContainer>
    )
}

export default Home
