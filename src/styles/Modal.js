import styled from 'styled-components';

const Modal = styled.div`
    background-color: rgba(0,0,0, 0.9);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    color: white;
    overflow: hidden;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    .settings{
        background-color: #212121;
        width: 80vw;
        max-width: 800px;
        padding: 1rem 2rem;
        header{
            display: flex;
            align-items: center;
        }
        header h1{
            margin-left: 32px;
        }
        header img{
            width: 70px;
        }
        .temas p{
            cursor: pointer;
            margin: 1.5rem 0;
        }
    }
`

export default Modal;