import React, {useState} from 'react';
import { FaEnvelope } from 'react-icons/fa';
import axios, { SUBSCRIBEENDPOINT } from '../Api';
import Layout from './Layout';
import { message } from 'antd';
import {
        BlogWrapper, 
        BlogsSection, 
        DirectiveSection,
        LatestSection,
        FiltersSection,
        DirHeading,
        SectionList,
        ListElement,
        SectionList2,
        ListElement2,
        SubscriptionWrapper,
        SubscriptionHeading,
        InputWrapper,
        InputLabel,
        Input,
        InputSubmit,
        Form
    } from '../containers/BlogElements'; 

function BlogLayout({blogscat, column, children}) {
    const [email, setemail] = useState("")
    
    const HandleSubmit = (e) => {
        e.preventDefault()

        axios.post(SUBSCRIBEENDPOINT, {'email':email})
        .then(res => success())
        .catch(err => failure())

        
    }

    const success = () => {
        message
        .loading('You are being subscribed..', 2.5)
        .then(() => message.success('subscription complete', 2.5))
        .then(() => message.info('Thank you for subscribing', 2.7));

        setemail("")
    };

    const failure = () => {
        message
        .loading('You are being subscribed..', 2.5)
        .then(() => message.error('Something went wrong', 2.5))
        .then(() => message.info('Try again, if the error proceed contact me', 2.8));
    };

    return (
        <Layout blog={true}>
            <BlogWrapper column={column}>
                <BlogsSection>
                    {children}
                </BlogsSection>
                <DirectiveSection>
                    <LatestSection>
                        <DirHeading>Topics</DirHeading>
                        <SectionList>
                            <ListElement to="../blogs/data analytics">Data analytics</ListElement>
                            <ListElement to="../blogs/statistical modelling">Statistical modelling</ListElement>
                            <ListElement to="../blogs/web development">Web development</ListElement>
                            <ListElement to="../blogs/mobile development">Mobile development</ListElement>
                            <ListElement to="../blogs/software development">Software development</ListElement>
                        </SectionList>
                    </LatestSection>
                    <FiltersSection>
                        <DirHeading>Filters</DirHeading>
                        <SectionList2>
                            {blogscat.map((category,index) => <ListElement2 key={index} to={`../blogs/${category.name}`}>{category.name}</ListElement2>)}
                        </SectionList2>
                    </FiltersSection>
                </DirectiveSection>
            </BlogWrapper>
            <SubscriptionWrapper>
                <SubscriptionHeading>Subscribe to receive heads up on new blogs</SubscriptionHeading>
                <Form onSubmit={HandleSubmit}>
                    <InputWrapper>
                        <InputLabel><FaEnvelope /></InputLabel>
                        <Input type="email" value={email} onChange={(e) => setemail(e.target.value)} required />
                    </InputWrapper>
                    <InputSubmit type="submit" value="subscribe" />
                </Form>
            </SubscriptionWrapper>
        </Layout>
    )
}

export default BlogLayout
