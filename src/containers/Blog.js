import React, { useState, useEffect } from 'react';
import BlogLayout from '../components/BlogLayout';
import axios, { BLOGCATEGORIESENDPOINT, BLOGSENDPOINT } from '../Api';
import {
    BlogContent,
    BlogContent2,
    ImageDiv,
    BlogImage,
    BlogHeading,
    BlogDescription,
    TagList,
    Tag,
    BlogLink,
    NoBlog
} from './BlogElements';

function Blog() {
    const [blogscat, setblogscat] = useState([])
    const [blogs, setblogs] = useState([])

    useEffect(() => {
        const getData = async () => {
            let blogresponse = await axios.get(BLOGSENDPOINT);
            let blogcatresponse = await axios.get(BLOGCATEGORIESENDPOINT);

            console.log(blogresponse)
            setblogs(blogresponse.data);
            setblogscat(blogcatresponse.data);
        }

        getData();
    }, [])

    return (
        <BlogLayout blogscat={blogscat}>
            {blogs.length > 0 ? blogs.map((blog, index) =>
                <BlogLink to={`blog/${blog.slug}`} key={index}>
                    <BlogContent>
                        <ImageDiv>
                            <BlogImage src={blog.photo} />
                        </ImageDiv>
                        <BlogContent2>
                            <BlogHeading>{blog.title}</BlogHeading>
                            <BlogDescription>{blog.blog_intro}</BlogDescription>
                            <TagList>
                                {blog.category.map(category => (blogscat.filter(cat => cat.id === category).map((cat => <Tag key={cat.id}>{cat.name.toLowerCase()}</Tag>))))}
                            </TagList>
                        </BlogContent2>
                    </BlogContent>
                </BlogLink>
            )
                :
                <NoBlog>No blogs yet</NoBlog>
            }
        </BlogLayout>
    )
}

export default Blog
