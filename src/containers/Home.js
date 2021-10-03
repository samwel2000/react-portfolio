import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Project from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

function Home() {
    return (
            <Layout>
                <Helmet>
                    <title>Samwel Godfrey</title>
                    <link rel="canonical" href={`https://samwelgodfrey.com/`} />
                </Helmet>

                <Hero />

                <About />

                <Experience />

                <Skills />

                <Project />

                <ContactMe />

            </Layout>

    )
}

export default Home
