import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar  from '../components/Navbar';
import Orientation from '../components/Orientation';
import MyContainer from '../GlobalElements';

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

            </main>
            <footer>
                <Footer />
            </footer>
        </MyContainer>
    )
}

export default Home
