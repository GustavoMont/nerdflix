import React from 'react'
import { ListContainer } from '../../styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


function MovieList({ content, className }) {
    const url = `https://image.tmdb.org/t/p/w300`
    
    const imageChecker = (src, alt) =>{
        return src ? <img src={`${url}/${src}`} alt={alt}/> : <div className="alternate"><p>{alt}</p></div>
    }
    return (
        <ListContainer className={className} >
            <h3>{content.title}</h3>
            {content.lista.map(item => <li key={`${item.id}`}> {imageChecker(item.poster_path, item.original_title || item.original_name)} </li>)}
            <div className="movieRow-left">
                <NavigateBeforeIcon style={{fontSize: 70 }} />
            </div>
            <div className="movieRow-rigth">
                <NavigateNextIcon style={{fontSize: 70 }}/>
            </div>
        </ListContainer>
    )

}


export default MovieList;







