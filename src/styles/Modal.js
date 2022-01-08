import styled from "styled-components";


const Modal = styled.div`
    position: fixed;
    width: min(95vw, 800px);
    background-color: #040404;
    top: 35%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%);
    padding: 2rem 1rem;
    svg{
        display: block;
        color: white;
        margin-left: auto;
        font-size: 2rem;
        cursor: pointer;
    }
    li{
        --color: white;
        &#sair{
            --color: red;
        }
        color: var(--color);
        border: 1px solid var(--color);
        padding: 1rem;
        margin: .5rem 0;
        cursor: pointer;
        a{
            display: inline-block;
            width: 100%;
            height: 100%;
        }
    }
`

export default Modal;