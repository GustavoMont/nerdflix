import styled from "styled-components";

const FavoritesList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
`

export const FavoritesContainer = styled.div`
    background-color: #0f0f0f;
    padding: 8rem 5rem;
    width: 100vw;
    @media (max-width: 560px) {
        padding: 8rem 1rem;
        
    }
`

export default FavoritesList