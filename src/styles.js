import styled, { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        background-color: #010101;
    }
`;


export const ListContainer = styled.div`
    white-space: nowrap;
    color: white;
    overflow-x: hidden;
    background-color: rgba(10,10,10, 0.1);
    margin: 48px 0;
    padding: 2rem;
    h3{
        margin: 12px 8px;
        font-size: 1.5rem;
    }
    li{
        display: inline-block;
        width: 150px;
        list-style: none;
        vertical-align: middle;
        img{
            width: 100%;
            transform: scale(0.9);
            transition: ease all .3s;
            cursor: pointer;
            border-radius: 10px;
            &:hover{
                border-radius: 5px;
                transform: scale(1);
            }
        }
    }
`
