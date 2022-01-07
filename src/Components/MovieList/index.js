import React, { useState } from 'react'
import { ListContainer } from '../../styles/ListContainer';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'; // it's like this "<"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';// it's like this ">"
import { handleLeft, handleRight } from '../../Utils/handleMovieList' // all this functions is commented on its files
import CardMovie from '../CardMovie';

function MovieList({ content, className }) {
    const [x, setX] = useState(-400) // initial position of movie list

    return (
        <ListContainer className={className} >
            <h3>{content.title}</h3>
            <ul style={{ marginLeft: x }} > {/*this make the list move*/}
                {content.lista.map(item => (
                    <CardMovie movie={item} type={content.type} key={item.id} />
                ))}
            </ul>
            <div className="movieRow-left">
                <NavigateBeforeIcon style={{ fontSize: 70 }} onClick={() => handleLeft(x, setX)} />
            </div>
            <div className="movieRow-rigth">
                <NavigateNextIcon style={{ fontSize: 70 }} onClick={() => handleRight(x, setX, content.lista)} />
            </div>
        </ListContainer>
    )

}


export default MovieList;







