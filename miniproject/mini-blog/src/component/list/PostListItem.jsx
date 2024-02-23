import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100%-32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;

    &:hover {
        cursor: pointer;
        background-color: #f5c5b5;
        text-shadow: 0 0 8px rgba(255,255,255,0.6);
        box-shadow: 0 0 15px rgba(0,0,0,0.2);

        transition: background-color 0.3s ease, font-weight 0.3s ease,  text-shadow 0.3s ease, box-shadow 0.3s ease;
    }

`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;

    &:hover{
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export default function PostListItem(props) {
    const { post, onClick } = props;

    return(
        <Wrapper onClick={onClick}>
            <TitleText> {post.title} </TitleText>
        </Wrapper>
    );
}