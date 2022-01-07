import styled from "styled-components";

const Button = styled.button`
    border: 2px white solid;
    font-family: inherit;
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
    background-color: transparent;
    color: white;
    transition: 1s ease all;
    &:hover{
        background-color: white;
        color: black;
    }
`

export default Button