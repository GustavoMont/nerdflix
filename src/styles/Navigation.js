import styled from 'styled-components'
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
    @media(max-width: 700px){
        padding: 1.2rem 12px;
    }
    h1{
        color: var(--main-color);
        font-size: 2.5rem;
        font-style: italic;
        font-weight: 700;
        @media(max-width: 700px){
            font-size: 1.9rem;
        }
    }
    img{
        width: 50px;
        border-radius: 50%;
    }
`
