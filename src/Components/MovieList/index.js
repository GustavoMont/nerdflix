import { ListContainer } from '../../styles';

function MovieList({ content }) {
    const url = `https://image.tmdb.org/t/p/w300`
    
    const imageChecker = (src, alt) =>{
        return src ? <img src={`${url}/${src}`} alt={alt}/> : <div className="alternate"><p>{alt}</p></div>
    }
    return (
        <ListContainer>
            <h3>{content.title}</h3>
            {content.lista.map(item => <li key={`${item.id}`}> {imageChecker(item.poster_path, item.original_title || item.original_name)} </li>)}
        </ListContainer>
    )

}


export default MovieList;







