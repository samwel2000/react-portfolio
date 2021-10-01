import styled, { css } from "styled-components";

export const CommentWrapper = styled.section`
    width: 100%;
    position: relative;
    padding-top: 1.5rem;
`
export const CommentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--dark-navy);
    position: relative;
    z-index: 2;
`
export const CommentIntro = styled.h5`
    color: var(--lightest-slate);
    font-size: 1.5rem;
    font-family: var(--font-mono);
    position relative;

    &:before {
        content: "";
        width: 3ch;
        height: 3px;
        position: absolute;
        bottom: -4px;
        background: var(--green);
        border-radius: 6px;
    }
`
export const CommentButton = styled.button`
    color: var(--lightest-slate);
    font-size: 1rem;
    background: linear-gradient(to right, var(--light-navy), var(--green-tint));
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    border-radius: 5px;
    transition-duration: 0.3s all;
    border: 1px solid var(--green-tint);

    &:hover {
        background: linear-gradient(to left, var(--light-navy), var(--green-tint));
        color: #fff;
    }

    &:focus {
        background: linear-gradient(to bottom, var(--light-navy), var(--green-tint));
        color: #fff;
    }
`
export const CommentForm = styled.div`
    position: absolute;
    z-index: 1;
    margin-top: 3rem;
    padding: 1.5rem 0 1rem 0;
    width: 100%;
    height: 400px;
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
    overflow: hidden;
    inset: 0;

    ${props => props.open && css`
        opacity: 1;
        visibility: visible;
        transform: translateY(0%);
    `}
`
export const InputGroup = styled.div`
    display: flex;
    gap: 1rem;
`
export const CommentInput = styled.input`
    font-size: 1rem;
    padding: 1rem;
    color: var(--light-slate);
    background: linear-gradient(to right, var(--light-navy), var(--green-tint));
    border: 1px solid var(--green-tint);
    border-radius: 5px;

    &[type="text"], &[type="email"]{
        width: 50%;
    }
    &[type="submit"] {
        width: 100%;
        background: inherit;
        border: 1px solid var(--green);
        transition: 0.3s all;

        &:hover {
            background: linear-gradient(to left, var(--light-navy), var(--green));
            color: #fff;
        }
    }
    &:focus {
        outline: none;
        border: 1px solid var(--green-tint);
    }
`
export const CommentTextarea = styled.textarea`
    font-size: 1.1rem;
    padding: 1rem;
    color: var(--light-slate);
    background: linear-gradient(to right, var(--light-navy), var(--green-tint));
    border: 1px solid var(--green-tint);
    border-radius: 5px;
    width: 100%;
    margin: 1.85rem 0;
    resize: none;

    &:focus {
        outline: none;
        border: 1px solid var(--green-tint);
    }
`
export const CommentSection = styled.div`
    position: relative;
    padding: 1.5rem 0 1rem 0;
    width: 100%;
    margin-top: 0;
    transition: all 0.5s;

    ${props => props.open && css`
        margin-top: 400px;
    `}
`
export const ScrollableDiv = styled.ul`
    max-height: 300px;
    overflow-y: scroll;
    list-style: none;

    &::-webkit-scrollbar{
        width: 3px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--slate);
        opacity: 0.2;
        border-radius: 10px;
        height: 5px;
    }
    &::-webkit-scrollbar-track {
        background: inherit;
    }
`
export const CommentDiv = styled.li`
    background: var(--light-navy);
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`
export const CommentContent = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
    word-break: break-word;
    color: var(--light-slate);
    line-height: 1.5;

    &.mark {
        color: var(--green);
        background: inherit;
    }
    &.name {
        color: var(--lightest-slate);
        font-weight: 600;
    }
`