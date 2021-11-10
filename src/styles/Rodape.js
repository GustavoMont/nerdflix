import styled from 'styled-components';


export const Rodape = styled.footer`
    background-color: black;
    color: white;
    text-align: center;

    padding: 1rem;

    p{
        margin-bottom: .5rem;
        user-select: none;
    }

    a{
        color: var(--main-color);
        &:hover{
            color: #2ef;
        }
    }

`;
