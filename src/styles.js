import styled from 'styled-components'


export const ListContainer = styled.div`
    white-space: nowrap;
    background-color: black;
    color: white;
    overflow-x: hidden;
    margin: 48px 0;
    li{
        display: inline-block;
        width: 180px;
        list-style: none;
        img{
            width: 100%;
            transform: scale(0.9);
            transition: ease all .3s;
            cursor: pointer;
            &:hover{
                transform: scale(1);
            }
        }
    }
`
