import React, { useEffect, useState } from 'react'
import axios, { COMMENTENDPOINT } from '../../Api';
import { CommentButton, CommentContent, CommentDiv, CommentForm, CommentHeader, CommentInput, CommentIntro, CommentSection, CommentTextarea, CommentWrapper, InputGroup, ScrollableDiv } from './CommentElements'
import { message } from 'antd';

function Comment({ id }) {
    const [comments, setcomments] = useState([])
    const [open, setopen] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [commentcontent, setcommentcontent] = useState("");

    useEffect(() => {
        const getComments = async () => {
            let response = await axios.get(COMMENTENDPOINT);
            setcomments(response.data);
        }
        getComments();
    }, [])


    const HandleSubmit = e => {
        e.preventDefault();
        let data = {
            'post': id,
            'name': name,
            'email': email,
            'body': commentcontent
        };

        axios.post(COMMENTENDPOINT, data)
            .then(res => success(res.data))
            .catch(err => failure());


    }

    const success = (data) => {
        message.info('Thank you for your comment', 2.7);

        setcomments([data, ...comments])
        setname("");
        setemail("");
        setcommentcontent("");
        setopen(!open);
    };

    const failure = () => {
        message
            .loading('Yo\'re comment is  being added..', 2.5)
            .then(() => message.error('Something went wrong', 2.5))
            .then(() => message.info('Try again, if the error proceed contact me', 2.8));
    };

    return (
        <CommentWrapper>
            <CommentHeader>
                <CommentIntro>Comments</CommentIntro>

                <CommentButton onClick={() => setopen(!open)}>Add comment</CommentButton>
            </CommentHeader>
            <CommentForm open={open}>
                <form onSubmit={HandleSubmit}>
                    <InputGroup>
                        <CommentInput value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Enter your name: eg Samwel Godfrey" pattern="^\S+\s\S+$" required />
                        <CommentInput value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter your email" />
                    </InputGroup>
                    <CommentTextarea value={commentcontent} onChange={(e) => setcommentcontent(e.target.value)} required rows="7" placeholder="Enter your comment" />
                    <CommentInput type="submit" value="add comment" />
                </form>
            </CommentForm>
            <CommentSection open={open}>
                <ScrollableDiv>
                    {comments.length > 0 ? comments.filter(com => com.post = id).map(data => (
                        <CommentDiv key={data.id}>
                            <CommentContent>{data.body}</CommentContent>
                            <CommentContent className="mark">▹</CommentContent>
                            <CommentContent className="name">{data.name}</CommentContent>
                        </CommentDiv>
                    )) :
                        <CommentDiv>
                            <CommentContent>
                                No comments yet
                            </CommentContent>
                        </CommentDiv>
                    }
                </ScrollableDiv>

            </CommentSection>
        </CommentWrapper>
    )
}

export default Comment
