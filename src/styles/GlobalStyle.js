import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        transition: ease .3s all;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        background-color: #010101;
    }
    :root{
        --main-color: #d90912;
        font-size: 16px;
    }
`;