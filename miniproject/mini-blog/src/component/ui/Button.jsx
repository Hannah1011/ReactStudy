import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    margin-bottom: 8px;
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 40px;
    border-color: #c55555;
    cursor: pointer;
    background-color: #c55555;
    color: hsl(0, 0%, 94.50980392156862%);
`;

export default function Button(props) {
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}> {title || "button"}</StyledButton>;
}