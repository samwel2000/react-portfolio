import React from 'react'
import { ContactButton, ContactBigHeader, ContactHeader, ContactWrapper, ContactContents, ContentWrapper } from './ContactMeElements'

function ContactMe() {
    return (
        <ContactWrapper>
            <ContentWrapper>
                <ContactHeader>04. what's next?</ContactHeader>
                <ContactBigHeader>Get In Touch</ContactBigHeader>
                <ContactContents>
                Although I'm not currently looking for any new opportunities, 
                my inbox is always open. Whether you have a question or 
                just want to say hi, 
                I'll try my best to get back to you!
                </ContactContents>
                <ContactButton>Contact me</ContactButton>
            </ContentWrapper>
        </ContactWrapper>
    )
}

export default ContactMe
