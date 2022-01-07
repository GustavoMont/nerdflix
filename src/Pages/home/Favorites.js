import CardMovie from '../../Components/CardMovie'
import { useSelector, useDispatch } from "react-redux"
import FavoritesList, { FavoritesContainer } from '../../styles/FavoriteList';
import { useEffect } from 'react';
export default function Favorites() {
    const favorites = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch({type:'CHANGE_MENU', menuHome: false})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <FavoritesContainer>
            <h1 style={{color: 'white', textAlign: 'center', margin: '2rem 0'}}>Meus Favoritos</h1>
            <FavoritesList>
                {favorites.map(favorite => <CardMovie key={favorite.id} movie={favorite} type={favorite.type} /> )}
            </FavoritesList>
        </FavoritesContainer>
        
        
    )
}