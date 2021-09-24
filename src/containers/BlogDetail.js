import React, { useState, useEffect } from 'react';
import BlogLayout from '../components/BlogLayout';
import axios, { BLOGCATEGORIESENDPOINT } from '../Api';
import { useParams } from 'react-router-dom';
import { BlogHeadingDetail, BlogDetailContainer } from './BlogElements';


function BlogDetail() {
    const [blogscat, setblogscat] = useState([])
    const [blog, setblog] = useState("")

    const slug = useParams().id;

    useEffect(() => {
        const url = `post/${slug}`;

        const getData = async () => {
            let blogdetail = await axios.get(url);
            let blogcatresponse = await axios.get(BLOGCATEGORIESENDPOINT);

            setblogscat(blogcatresponse.data);
            setblog(blogdetail.data)
        }

        getData();
    }, [slug])

    const ImgageUrl = "src=\"http://localhost:8000/media/blogsContent";

    const content = () => blog.content ? blog.content.replace("src=\"/media/blogsContent", ImgageUrl) : blog.content;

    return (
        <BlogLayout blogscat={blogscat} column={true}>
            <BlogDetailContainer>
                <BlogHeadingDetail>{blog.title && blog.title.toUpperCase()}</BlogHeadingDetail>
                <div className="blog__detail" dangerouslySetInnerHTML={{ __html: content() }}></div>
            </BlogDetailContainer>
        </BlogLayout>
    )
}

export default BlogDetail
