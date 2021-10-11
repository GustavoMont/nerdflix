import React, { useState } from 'react'
import { ListContainer } from '../../styles/ListContainer';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { imageChecker, handleLeft, handleRight } from '../../Utils/handleMovieList'

function MovieList({ content, className }) {
    const url = `https://image.tmdb.org/t/p/w300`
    const [x, setX] = useState(-400)

    return (
        <ListContainer className={className} >
            <h3>{content.title}</h3>
            <ul style={{ marginLeft: x}} >
                {content.lista.map(item => <li key={`${item.id}`}> 
                    {imageChecker(url, item.poster_path, item.original_title || item.original_name)}
                </li>)}
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







