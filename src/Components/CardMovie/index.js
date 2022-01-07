import {Link} from 'react-router-dom';
import { LiMovie } from '../../styles/ListContainer';
import { imageChecker } from '../../Utils/handleMovieList';
export default function CardMovie({ movie, type }) {
    const url = `https://image.tmdb.org/t/p/w300` // it's url to get image
    return (
        <LiMovie>
            <Link to={`/info/${type}/${movie.id}`} > {/* TO get more information about the movie */}
                {imageChecker(url, movie.poster_path, movie.original_title || movie.original_name)}
            </Link>
        </LiMovie>
    )
}