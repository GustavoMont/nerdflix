import styled from 'styled-components'

export const BoxList = styled.main`
    margin-top: -190px;
    @media(max-width: 700px){
        margin-top: -43%;
    }
`;

export const ListContainer = styled.div`
    white-space: nowrap;
    color: white;
    overflow-x: hidden;
    background-color: rgba(10,10,10, 0.1);
    margin: 30px 0;
    padding: .2rem 32px;
    position: relative;
    h3{
        margin: 12px 8px;
        font-size: 1.5rem;
    }
    ul{
        transition: ease .5s all;
    }
    .movieRow-left, .movieRow-rigth{
        background-color: rgba(0,0,0, 0.5);
        position: absolute;
        z-index: 5;
        width: 55px;
        height: 270px;
        top: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: ease .3s all;
        opacity: 0;
        @media(max-width: 1024px){
            opacity: 1;
        }
        svg{
            fill: #fff;
            transition: ease .3s all;
            @media(max-width: 700px){
                transform: scale(0.5);
            }
            &:hover{
                fill: #d90912;
                transform: scale(1.3);
                @media(max-width: 700px){
                    transform: scale(1);
                }
            }

        }
    }
    .movieRow-left{
        left:0;
    }
    .movieRow-rigth{
        right: 0;
    }
    &:hover .movieRow-left,
    &:hover .movieRow-rigth{
        opacity: 1;
    }
    @media(max-width: 700px){
        li{
            width: 100px;
        }
        .movieRow-left, .movieRow-rigth{
            width: 35px;
            height: 140px;
            top: 65px;
        }
    }
`

export const LiMovie = styled.li`
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
        background-color: var(--main-color);
        @media(max-width: 700px){
            height: 154px;
            font-size: .8rem;
        }
    }
`