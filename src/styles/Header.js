import styled from 'styled-components'
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
        padding: 0 48px;
        @media(max-width: 700px){
            padding: 0 12px;
        }
        h1{
            color: var(--main-color);
            font-size: 3rem;
            @media(max-width: 700px){
                font-size: 1.9rem;
            }
        }
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