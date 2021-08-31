import React, { useEffect, useState } from 'react';
import axios, { CONTACTENDPOINT } from '../../Api';
import { ContactButton, ContactBigHeader, ContactHeader, ContactWrapper, ContactContents, ContentWrapper } from './ContactMeElements'

function ContactMe() {
    const [contentData, setcontentData] = useState([])

    useEffect(() => {
        axios.get(CONTACTENDPOINT)
            .then(res => setcontentData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <ContactWrapper>
            <ContentWrapper>
                <ContactHeader data-aos="fade-in" data-aos-duration="1000">04. what's next?</ContactHeader>
                <ContactBigHeader data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">Get In Touch</ContactBigHeader>
                {contentData.map(data => (
                    <ContactContents key={data.id} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">{data.content}</ContactContents>
                ))}
                <ContactButton href="mailto:samwelgfrey@gmail.com" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">Contact me</ContactButton>
            </ContentWrapper>
        </ContactWrapper>
    )
}

export default ContactMe
