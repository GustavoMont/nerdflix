import React, { useState, useEffect } from 'react';
import { getContent, getTvInfo } from '../Utils/getContent'
import { GlobalStyle } from '../styles'
import MovieList from '../Components/MovieList'
import Outdoor from '../Components/Outdoor';
import Navegation from '../Components/Navegation';
import { useLocation } from 'react-router';

const Home = () => {
    const [content, setContent] = useState([])
    const [outdoorInfo, setOutdoorInfo] = useState(null)
    const randomGenerator = (length) => Math.floor(Math.random() * (length - 1))
    let { image, isLogged } = useLocation()
    
    useEffect(() => {
        (async () => {
            const conteudo = await getContent()
            setContent(conteudo)
            const index = randomGenerator(conteudo[0].lista.length)
            const info = await getTvInfo(conteudo[0].lista[index].id)
            setOutdoorInfo(info)
        })()
        console.log(isLogged)
    }, [image, isLogged])

    return (
        <>
            <GlobalStyle />
            
            <Navegation profilePic={ image }/>
            {outdoorInfo && <Outdoor content={outdoorInfo} titleId="outdoor-title" />}
            <main style={{ marginTop: -220 }}>
                {
                    content.map(item => <MovieList content={item} key={item.title} className="movierow"/>)
                }
            </main>
        </>
    )
}

export default Home;