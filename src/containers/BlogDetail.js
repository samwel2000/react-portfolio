import React, { useState, useEffect } from 'react';
import BlogLayout from '../components/BlogLayout';
import axios, { BLOGCATEGORIESENDPOINT } from '../Api';
import { useParams } from 'react-router-dom';
import {
    InfoDiv,
    InfoDivInner,
    BlogHeadingDetail,
    BlogDetailContainer
} from './BlogElements';
import Comment from '../components/Comment';
import { FaEye, FaShareAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'react-share';
import { Helmet } from 'react-helmet';

function BlogDetail() {
    const [blogscat, setblogscat] = useState([])
    const [blog, setblog] = useState("")
    const [share_count, setshare_count] = useState(null)

    const slug = useParams().id;

    useEffect(() => {
        const url = `post/${slug}/`;

        const getData = async () => {
            let blogdetail = await axios.get(url);
            let blogcatresponse = await axios.get(BLOGCATEGORIESENDPOINT);
            setblogscat(blogcatresponse.data);
            setshare_count(blogdetail.data.share_count)
            setblog(blogdetail.data);
            axios.patch(url, { view_count: blogdetail.data.view_count + 1 })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

        getData();

    }, [slug])

    const ImgageUrl = "src=\"http://localhost:8000/media/blogsContent";
    const content = () => blog.content ? blog.content.replace("src=\"/media/blogsContent", ImgageUrl) : blog.content;
    const Url = window.location.href
    const view_count = blog.view_count + 1

    const HandleShareIncrement = () => {
        const url = `post/${slug}/`;
        axios.patch(url, { share_count: share_count + 1 })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        setshare_count(share_count + 1);
    }

    return (
        <BlogLayout blogscat={blogscat} column={true}>
            <Helmet>
                <title>Blogs | {`${blog.title}`}</title>
                <link rel="canonical" href={`https://samwelgodfrey.com/blog/${blog.slug}`} />
                <meta name="description" content={blog.blog_intro} />
            </Helmet>

            <BlogDetailContainer>
                <BlogHeadingDetail>{blog.title && blog.title.toUpperCase()}</BlogHeadingDetail>
                <InfoDiv>
                    <FacebookShareButton url={Url} quote={blog.title} style={{ opacity: 0.8 }}>
                        <FacebookIcon size={33} round={true} onClick={HandleShareIncrement} />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={Url}
                        title={blog.title}
                        related="samwelgodfrey8"
                        style={{ opacity: 0.8 }}
                    >
                        <TwitterIcon size={33} round={true} onClick={HandleShareIncrement} />
                    </TwitterShareButton>
                    <FacebookMessengerShareButton url={Url} style={{ opacity: 0.8 }}>
                        <FacebookMessengerIcon size={33} round={true} onClick={HandleShareIncrement} />
                    </FacebookMessengerShareButton>
                    <WhatsappShareButton url={Url} title={blog.title} style={{ opacity: 0.8 }}>
                        <WhatsappIcon size={33} round={true} onClick={HandleShareIncrement} />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={Url}
                        title={blog.title}
                        summary={blog.blog_intro}
                        source="samwelgodfrey.com"
                        style={{ opacity: 0.8 }}>
                        <LinkedinIcon size={33} round={true} onClick={HandleShareIncrement} />
                    </LinkedinShareButton>
                    <TelegramShareButton url={Url} title={blog.title} style={{ opacity: 0.8 }}>
                        <TelegramIcon size={33} round={true} onClick={HandleShareIncrement} />
                    </TelegramShareButton>
                </InfoDiv>
                <InfoDiv>
                    <InfoDivInner><FiClock /> {blog.minutes}<span>min read</span></InfoDivInner>
                    <InfoDivInner><FaEye /> {view_count < 10 ? `0${view_count}` : view_count}</InfoDivInner>
                    <InfoDivInner><FaShareAlt /> {share_count < 10 ? `0${share_count}` : share_count}</InfoDivInner>
                </InfoDiv>
                <div className="blog__detail" dangerouslySetInnerHTML={{ __html: content() }}></div>
                <Comment id={blog.id ? blog.id : ""} />
            </BlogDetailContainer>
        </BlogLayout>
    )
}

export default BlogDetail
