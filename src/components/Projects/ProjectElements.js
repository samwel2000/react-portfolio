import styled from "styled-components";

export const ProjectWrapper =  styled.section`
    min-height: 89vh;
    width: 86%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content:center;

    @media screen and (max-width:768px){
        width: 100%;
    }
`
export const ProjectImage = styled.div`
    background: black;
`