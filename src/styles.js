import styled, { createGlobalStyle } from 'styled-components'

const url = "https://image.tmdb.org/t/p/original"

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

export const Header = styled.header`
    height: 100vh;
    background-image: url(${props => url + props.background});
    background-size: cover;
    background-position: center;
    div{
        width: inherit;
        height: inherit;
    }
    .vertical-gradient{
        background:  linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(01,01,01, 1));
    }
    .horizontal-gradient{
        background:  linear-gradient(to left, rgba(0,0,0,0) 10%, rgba(01,01,01, 1));
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 16px;
        h1{
            color: red;
        }
    }

`

