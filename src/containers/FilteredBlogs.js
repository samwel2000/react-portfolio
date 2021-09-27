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
    BlogLink2,
    NoBlog
} from './BlogElements';
import { useParams } from 'react-router-dom';

function FilteredBlog() {
    const [blogscat, setblogscat] = useState([])
    const [filteredBlogs, setfilteredBlogs] = useState([])

    const category = useParams().id;

    useEffect(() => {
        const getData = async () => {
            let blogresponse = await axios.get(`${BLOGSENDPOINT}${category}`);
            let blogcatresponse = await axios.get(BLOGCATEGORIESENDPOINT);

            const uniqueBlogs = [...new Map(blogresponse.data.map(blog => [blog['id'], blog])).values()]
            setfilteredBlogs(uniqueBlogs);
            console.log(blogresponse.data)
            setblogscat(blogcatresponse.data);
        }

        getData();
    }, [category])

    

    return (
        <BlogLayout blogscat={blogscat} column={true}>
            {filteredBlogs.length > 0 ? filteredBlogs.map((blog, index) =>
                <BlogLink2 to={`../blog/${blog.slug}`} key={index}>
                    <BlogContent>
                        <ImageDiv>
                            <BlogImage src={blog.photo} />
                        </ImageDiv>
                        <BlogContent2>
                            <BlogHeading>{blog.title}</BlogHeading>
                            <BlogDescription>{blog.blog_intro}</BlogDescription>
                            <TagList>
                                {blog.category.map(category => (
                                    blogscat.filter(cat => cat.id === category).map(
                                        (cat => <Tag key={cat.id}>{cat.name.toLowerCase()}</Tag>))))
                                }
                            </TagList>
                        </BlogContent2>
                    </BlogContent>
                </BlogLink2>
            )
                :
                <NoBlog>No blogs in {category} category yet</NoBlog>
            }
        </BlogLayout>
    )
}

export default FilteredBlog
