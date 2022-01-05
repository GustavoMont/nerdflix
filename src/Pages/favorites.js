import React from "react";
import { useSelector } from 'react-redux'

export default function Favorites() {
    const movies = useSelector(state => state.movies)

    console.log(movies);

    return(
        <>
            <h1>Favorite Page</h1>
            <ul>
                {movies.map(movie => <li key={movie.name} >{movie.name || movie.title}</li>)}
            </ul>
        </>

    )
} 