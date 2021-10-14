import React, { useState, useEffect } from 'react';
import { getContent, getTvInfo } from '../Utils/getContent' // functions to get the content from TMDB API
import { GlobalStyle } from '../styles/GlobalStyle' // style to all page
import MovieList from '../Components/MovieList' // Movie/ and tv show list component
import Outdoor from '../Components/Outdoor'; // Outdoor Component 
import Navegation from '../Components/Navegation'; // has the title and profile user picture
import { BoxList } from '../styles/ListContainer'; // COntainer for all movies/tv shows list
import Cookies from 'js-cookie' // to get user information

const Home = () => {
    const [content, setContent] = useState([]) // it receive all content querried on getContent function
    const [outdoorInfo, setOutdoorInfo] = useState(null) // this allows to renderize the Outdoor if content is already gotten
    const randomGenerator = (length) => Math.floor(Math.random() * (length - 1)) // return a random number between 0 and serie list length
    
    const image = JSON.parse(Cookies.get('nerdflix')).imageUrl // get image url from user email from cookies seted on login page
    
    useEffect(() => {
        (async () => {
            const conteudo = await getContent() // this function return an object with all lists content
            setContent(conteudo)
            const index = randomGenerator(conteudo[0].lista.length)
            const info = await getTvInfo(conteudo[0].lista[index].id) // it gets information about a specific serie randomly chosen
            setOutdoorInfo(info)
        })()
    }, [])

    return (
        <>
            <GlobalStyle  />
            
            <Navegation profilePic={ image }/> 
            {outdoorInfo && <Outdoor content={outdoorInfo} />} {/*this will render only after the information be gotten */} 
            
            {/* For each content gotten will return an MovieList Component with this information */} 
            <BoxList>
                {
                    content.map(item => <MovieList content={item} key={item.title} className="movierow"/> )
                }
            </BoxList>
        </>
    )
}

export default Home;