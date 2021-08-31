import React, {useState, useEffect} from 'react';
import axios, { BLOGCATEGORIESENDPOINT, BLOGSENDPOINT } from '../Api';
import Photo from '../assets/images/eastc.png';
import Layout from '../components/Layout';
import {
        BlogWrapper, 
        BlogsSection, 
        BlogContent, 
        BlogContent2, 
        ImageDiv,
        BlogImage,
        BlogHeading,
        BlogDescription,
        DirectiveSection,
        TagList,
        Tag,
        LatestSection,
        FiltersSection,
        DirHeading,
        SectionList,
        ListElement,
        SectionList2,
        ListElement2,
        BlogLink
    } from './BlogElements'; 

function Blog() {
    const [blogscat, setblogscat] = useState([])
    const [blogs, setblogs] = useState([])
    const [filteredBlogs, setfilteredBlogs] = useState([])

    useEffect(() => {
        axios.get(BLOGSENDPOINT)
            .then(res => {
                setblogs(res.data) 
                setfilteredBlogs(res.data)
            })
            .catch(err => console.log(err))

        axios.get(BLOGCATEGORIESENDPOINT)
            .then(res => setblogscat(res.data))
            .catch(err => console.log(err))
    }, [])

    const HandleFiltering = (category) => {
        if (filteredBlogs.length >0 ) {
            setfilteredBlogs(blogs.reduce(blog => category in blog.category))
        }
        console.log(category)
        console.log(filteredBlogs)
    }
    return (
        <Layout>
            <BlogWrapper>
                <BlogsSection>
                    {filteredBlogs.length > 0 ? filteredBlogs.map(blog => 
                        <BlogLink to="blog">
                            <BlogContent>
                                <ImageDiv>
                                    <BlogImage src={blog.photo} />
                                </ImageDiv>
                                <BlogContent2>
                                    <BlogHeading>{blog.title}</BlogHeading>
                                    <BlogDescription>{blog.content}</BlogDescription>
                                    <TagList>
                                        {blog.category.map((category, index) => <Tag key={index}>{category}</Tag>)}
                                    </TagList>
                                </BlogContent2>
                            </BlogContent>
                        </BlogLink>
                    )
                        :
                        <h1> No blogs yet</h1>
                    }
                    <BlogContent>
                        <ImageDiv>
                            <BlogImage src={Photo} />
                        </ImageDiv>
                        <BlogContent2>
                            <BlogHeading>Bolded Heading</BlogHeading>
                            <BlogDescription>Little content with ellipsis....</BlogDescription>
                            <TagList>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                            </TagList>
                        </BlogContent2>
                    </BlogContent>
                    <BlogContent>
                        <ImageDiv>
                            <BlogImage src={Photo} />
                        </ImageDiv>
                        <BlogContent2>
                            <BlogHeading>Bolded Heading</BlogHeading>
                            <BlogDescription>Little content with ellipsis....</BlogDescription>
                            <TagList>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                            </TagList>
                        </BlogContent2>
                    </BlogContent>
                    <BlogContent>
                        <ImageDiv>
                            <BlogImage src={Photo} />
                        </ImageDiv>
                        <BlogContent2>
                            <BlogHeading>Bolded Heading Bolded Heading Bolded Heading Bolded Heading Bolded Heading Bolded Heading Bolded Heading</BlogHeading>
                            <BlogDescription>Little content with ellipsis Little content with ellipsis Little content with ellipsis Little content with ellipsis Little content with ellipsis Little content with ellipsis Little content with ellipsis</BlogDescription>
                            <TagList>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                            </TagList>
                        </BlogContent2>
                    </BlogContent>
                    <BlogContent>
                        <ImageDiv>
                            <BlogImage src={Photo} />
                        </ImageDiv>
                        <BlogContent2>
                            <BlogHeading>Bolded Heading</BlogHeading>
                            <BlogDescription>Little content with ellipsis....</BlogDescription>
                            <TagList>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                                <Tag>tag1</Tag>
                            </TagList>
                        </BlogContent2>
                    </BlogContent>
                </BlogsSection>
                <DirectiveSection>
                    <LatestSection>
                        <DirHeading>Topics</DirHeading>
                        <SectionList>
                            <ListElement>Data analytics</ListElement>
                            <ListElement>Statistical modelling</ListElement>
                            <ListElement>Web development</ListElement>
                            <ListElement>Mobile development</ListElement>
                            <ListElement>Software development</ListElement>
                            <ListElement>programming topics</ListElement>
                            <ListElement>Solutions, Tips & Tricks</ListElement>
                        </SectionList>
                    </LatestSection>
                    <FiltersSection>
                        <DirHeading>Filters</DirHeading>
                        <SectionList2>
                            {blogscat.map(category => <ListElement2 key={category.id} onClick={HandleFiltering(category.name)}>{category.name}</ListElement2>)}
                        </SectionList2>
                    </FiltersSection>
                </DirectiveSection>
            </BlogWrapper>
        </Layout>
    )
}

export default Blog
