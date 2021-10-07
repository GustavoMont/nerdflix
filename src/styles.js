import styled, { createGlobalStyle } from 'styled-components'


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
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    color: white;
    .vertical-gradient, .horizontal-gradient{
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
        h1{
            color: #d90912;
            font-size: 3rem;
        }
        padding: 0 48px;
    }
    .info{
        max-width: 500px;
        text-align: justify;
        div{
            margin: 24px 0;
            display: flex;
            justify-content: space-between;
        }
        .av{
            color: green;
            font-weight: 700;
        }
    }
    .login{
        margin: 0 auto;
        padding: 0.5rem 1rem;
        text-align: center;
        h1{
            color: white;
            margin-bottom: 32px;
        }
        a{
            background-color: #fff;
            color: #d90912;
            padding: 1rem 2rem;
            border-radius: 12px;
        }
        a:hover{
            background-color: #d90912;
            color: #fff;

        }
    }
`

export const Bar = styled.nav`
    background-color: rgba(0, 0, 0, var(--opacity));
    padding: 1.2rem 3rem;
    position: fixed;
    z-index: 99;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ease .8s;
    h1{
        color: #d90912;
        font-size: 2.5rem;
        font-style: italic;
        font-weight: 700;
    }
    img{
        width: 50px;
    }
`

