import styled from "styled-components";

export const ArchiveWrapper = styled.section`
    width: 86%;
    margin: 0 auto;
    min-height: 50vh;
    margin-top: 5rem;

    @media screen and (max-width:769px){
        width: 100%;
    }
`
export const ArchiveHeading = styled.h1`
    color: var(--lightest-slate);
    font-weight: 600;
`
export const ArchiveIntro = styled.p`
    color: var(--green);
    // text-decoration: underline;
`
export const TableWrapper = styled.div`
    width: 100%;
    overflow-x: scroll;

    &::-webkit-scrollbar{
        height: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--slate);
        opacity: 0.5;
        border: 0.1px solid var(--navy);
        border-radius: 10px;
    }
`
export const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    min-width: 800px;
    white-space: wrap;
`
export const TableHeading = styled.th`
    color: var(--slate);
    font-weigth: bold;
    font-size: 1rem;
    padding: 0.5rem 0;
    letter-spacing: 1.2px;
`
export const Year = styled.td`
    color: var(--green);
    font-size: 1rem;
    cursor: pointer;
`
export const Title = styled.td`
    color: var(--lightest-slate);
    font-weigth: 600;
    font-size: 1rem;
    padding: 0.35rem 0;
    cursor: pointer;
    font-size: 1.2rem;
`
export const TableData = styled.td`
    color: var(--light-slate);
    font-weigth: 600;
    font-size: 1rem;
    padding: 0.35rem 0;
    cursor: pointer;
    font-size: 1rem;
`
export const TableDataLinks = styled.td`
    color: var(--light-slate);
    font-weigth: 600;
    padding: 0.35rem 0;
    cursor: pointer;
    display: flex;
    gap: 0.35rem;
    vertical-rl: center;
`
export const PLink = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    color: inherit;

    &:hover {
        text-decoration: none;
        color: var(--green);
    }
`

