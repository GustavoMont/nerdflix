import React, { useState } from 'react'
import { ListContainer } from '../../styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


function MovieList({ content, className }) {
    const url = `https://image.tmdb.org/t/p/w300`
    const [x, setX] = useState(-400)
    
    const imageChecker = (src, alt) => {
        return src ? <img src={`${url}/${src}`} alt={alt} /> : <div className="alternate"><p>{alt}</p></div>
    }
    const handleLeft = () =>{
        const step = Math.floor(window.innerWidth / 2)
        let newPos = x + step 
        if (newPos > 0) {
            newPos = 0
        }
        setX(newPos)
    }
    const handleRight = () => {
        const step = Math.floor(window.innerWidth / 2)
        const sizeList = content.lista.length * 180
        const limit = window.innerWidth - sizeList
        let newPos = x - step 
        if ( limit > newPos) {
            newPos = limit - 64
        }
        setX(newPos)
    }
    return (
        <ListContainer className={className} >
            <h3>{content.title}</h3>
            <ul style={{ marginLeft: x}} >
                {content.lista.map(item => <li key={`${item.id}`}> {imageChecker(item.poster_path, item.original_title || item.original_name)} </li>)}
            </ul>
            <div className="movieRow-left">
                <NavigateBeforeIcon style={{ fontSize: 70 }} onClick={handleLeft} />
            </div>
            <div className="movieRow-rigth">
                <NavigateNextIcon style={{ fontSize: 70 }}  onClick={handleRight} />
            </div>
        </ListContainer>
    )

}


export default MovieList;







