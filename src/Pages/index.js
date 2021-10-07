import React, { useState, useEffect } from 'react';
import { getContent, getTvInfo } from '../Utils/getContent'
import { GlobalStyle } from '../styles'
import MovieList from '../Components/MovieList'
import Outdoor from '../Components/Outdoor';
import Navegation from '../Components/Navegation';

const Home = () => {
    const [content, setContent] = useState([])
    const [outdoorInfo, setOutdoorInfo] = useState(null)
    const randomGenerator = (length) => Math.floor(Math.random() * (length - 1))

    useEffect(() => {
        (async () => {
            const conteudo = await getContent()
            setContent(conteudo)
            const index = randomGenerator(conteudo[0].lista.length)
            const info = await getTvInfo(conteudo[0].lista[index].id)
            setOutdoorInfo(info)
        })()
    }, [])

    return (
        <>
            <GlobalStyle />
            <Navegation />
            {outdoorInfo && <Outdoor content={outdoorInfo} titleId="outdoor-title" />}
            <main style={{ marginTop: -220 }}>
                {
                    content.map(item => <MovieList content={item} key={item.title} />)
                }
            </main>
        </>
    )
}

export default Home;