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
    margin: 30px 0;
    padding: 2rem;
    h3{
        margin: 12px 8px;
        font-size: 1.5rem;
    }
    li{
        display: inline-block;
        width: 180px;
        list-style: none;
        vertical-align: middle;
        *{
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
        .alternate{
            height: 250px;
            border: 2px solid white;
            white-space: normal;
            text-transform: uppercase;
            text-align: center;
            font-weight: 700;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            background-color: #a90000;
        }
    }
`
