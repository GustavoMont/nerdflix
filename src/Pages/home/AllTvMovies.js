import React, { useState, useEffect } from 'react';
import MovieList from '../../Components/MovieList' // Movie/ and tv show list component
import Outdoor from '../../Components/Outdoor'; // Outdoor Component 
import { BoxList } from '../../styles/ListContainer'; // COntainer for all movies/tv shows list
import { getContent, getTvInfo } from '../../Utils/getContent' // functions to get the content from TMDB API
import { useDispatch } from 'react-redux'

export default function AllTvMovies() {
    const dispatch = useDispatch()
    const [content, setContent] = useState([]) // it receive all content querried on getContent function
    const [outdoorInfo, setOutdoorInfo] = useState(null) // this allows to renderize the Outdoor if content is already gotten
    const randomGenerator = (length) => Math.floor(Math.random() * (length - 1)) // return a random number between 0 and serie list length
    useEffect(() => {
        (async () => {
            const conteudo = await getContent() // this function return an object with all lists content
            setContent(conteudo)
            const index = randomGenerator(conteudo[0].lista.length)
            const info = await getTvInfo(conteudo[0].lista[index].id) // it gets information about a specific serie randomly chosen
            setOutdoorInfo(info)
        })()
        dispatch({type: 'CHANGE_MENU', menuHome: true})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            { outdoorInfo && <Outdoor content={outdoorInfo} />} {/*this will render only after the information be gotten */ }

            {/* For each content gotten will return an MovieList Component with this information */ }
            <BoxList>
                {
                    content.map(item => <MovieList content={item} key={item.title} className="movierow" />)
                }
            </BoxList>
        </>
    )
} 