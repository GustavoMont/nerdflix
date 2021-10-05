import { ListContainer } from '../../styles';

function MovieList({ content }) {
    const url = `https://image.tmdb.org/t/p/w300`
    console.log(content)
    return (
        <ListContainer>
            <h3>{content.title}</h3>
            {content.lista.map(item => <li key={item.id}> <img src={`${url}/${item.poster_path}`} alt={item.original_title || item.original_name}/> </li>)}
        </ListContainer>
    )

}


export default MovieList;







