import Button from "../../styles/Buton"
import { Header } from "../../styles/Header"
import Add  from "@material-ui/icons/Add"
import Remove  from "@material-ui/icons/Remove"
import { handleOverview, getYear } from '../../Utils/handleOutdoor' // functions commented on Utils Files
import { useDispatch, useSelector } from "react-redux"
const url = "https://image.tmdb.org/t/p/original"

function Outdoor({ content, isPage }) {
    const dispatch = useDispatch()
    const favoritesId = useSelector(state => state.favoritesId)
    const isInFavoriteList = favoritesId.includes(content.id)
    const overview = isPage ? content.overview : handleOverview(content.overview) // if this outdoor be renderized on a Movie page the overview can be with its full size 
    const year = getYear(content.first_air_date || content.release_date) // it has diferrence between tv show info and movies info
    const temporadas = `${content.number_of_seasons} Temporada${content.number_of_seasons !== 1 ? 's' : ''}` // seasons information

    function handleFavoriteList(){
        if (!isInFavoriteList) {
            return dispatch({type: 'ADD_FAVORITES', favorite: content, favoriteId: content.id})
        }
        dispatch({type: 'REMOVE_FAVORITE', delete: content, deleteId: content.id})
    }
    return (
        <Header background={url + content.backdrop_path} >
            <div className="vertical-gradient">
                <div className="horizontal-gradient">
                    <h1 id="outdoor-title">{content.name || content.title}</h1> {/*if this outdoor be renderized on a Movie page the*/} 
                    <div className="info">
                        <div>
                            <span className="av">Nota: {content.vote_average}</span>
                            <span>{year}</span>
                            { content.number_of_seasons ? <span> {temporadas} </span> : '\t'}
                        </div>
                        <p>{overview}</p>
                        <div style={{marginBottom: '-.2rem'}} >
                            <Button type="button" onClick={handleFavoriteList} >
                                {
                                    isInFavoriteList ?
                                    <Remove /> :
                                    <Add />
                                }
                                <span>
                                    {isInFavoriteList ? 
                                    'Remover dos Favoritos' : 
                                    'Adicionar aos Favoritos'}
                                </span>
                            </Button>
                        </div>
                        <p className="genres"> Gênero: {content.genres[0].name} </p>
                    </div>
                </div>

            </div>
        </Header>
    )
}

export default Outdoor;