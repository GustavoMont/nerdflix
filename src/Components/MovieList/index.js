import React, { useState } from 'react'
import { ListContainer } from '../../styles/ListContainer';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'; // it's like this "<"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';// it's like this ">"
import { imageChecker, handleLeft, handleRight } from '../../Utils/handleMovieList' // all this functions is commented on its files
import { Link } from 'react-router-dom'

function MovieList({ content, className }) {
    const url = `https://image.tmdb.org/t/p/w300` // it's url to get image
    const [x, setX] = useState(-400) // initial position of movie list

    return (
        <ListContainer className={className} >
            <h3>{content.title}</h3>
            <ul style={{ marginLeft: x}} > {/*this make the list move*/}
                {content.lista.map(item => (
                    <li key={`${item.id}`}> 
                    <Link to={`/info/${content.type}/${item.id}`} > {/* TO get more information about the movie */}
                        {imageChecker(url, item.poster_path, item.original_title || item.original_name)}
                    </Link>
                </li>))}
            </ul>
            <div className="movieRow-left">
                <NavigateBeforeIcon style={{ fontSize: 70 }} onClick={() => handleLeft(x, setX) } /> 
            </div>
            <div className="movieRow-rigth">
                <NavigateNextIcon style={{ fontSize: 70 }}  onClick={() => handleRight(x, setX, content.lista) } />
            </div>
        </ListContainer>
    )

}


export default MovieList;







