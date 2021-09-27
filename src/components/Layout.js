import Navbar from './Navbar';
import Orientation from './Orientation';
import MyContainer from '../GlobalElements';
import Footer from './Footer';
import { FooterInfo, FooterLink, FooterSection } from './Footer/FooterElements';
import React, { useState, useEffect } from 'react';
import axios, { HEROENDPOINT } from '../Api';

function Layout(props) {
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get(HEROENDPOINT)
        .then(res => setloading(false))
        .catch(err => console.log(err))
    }, [])
    
    return (
        <MyContainer>
            {!loading ? 
            (
                <>
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
                </>
            )
        :
            <div style={{
                width:"100%",
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <div style={{
                    clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%,0% 75%, 0% 25%)",
                    background:"var(--green)",
                    width:"100px",
                    height:"100px",
                    display:"grid",
                    placeItems:"center",
                }}>
                    <div style={{
                        clipPath:"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%,0% 75%, 0% 25%)",
                        background:"var(--dark-navy)",
                        width:"90px",
                        height:"90px",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }}>
                        <p style={{
                            width:"100%",
                            height:"100%",
                            margin:"0",
                            fontSize:'3rem',
                            fontWeight: 'bolder',
                            textAlign:'center',
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            color:'var(--green)'
                        }}><span>S</span><span>G</span></p>
                    </div>
                </div>
            </div>
        }

        </MyContainer>
    )
}

export default Layout
