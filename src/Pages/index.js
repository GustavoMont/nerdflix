import React, { useState, useEffect } from 'react';
import { getContent, getTvInfo } from '../Utils/getContent'
import { GlobalStyle } from '../styles/GlobalStyle'
import MovieList from '../Components/MovieList'
import Outdoor from '../Components/Outdoor';
import Navegation from '../Components/Navegation';
import { BoxList } from '../styles/ListContainer';
import Cookies from 'js-cookie'

const Home = () => {
    const [content, setContent] = useState([])
    const [outdoorInfo, setOutdoorInfo] = useState(null)
    const randomGenerator = (length) => Math.floor(Math.random() * (length - 1))
    const image = JSON.parse(Cookies.get('teste-nerdflix')).imageUrl
    
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
            <GlobalStyle  />
            
            <Navegation profilePic={ image }/>
            {outdoorInfo && <Outdoor content={outdoorInfo} />}
            <BoxList>
                {
                    content.map(item => <MovieList content={item} key={item.title} className="movierow"/>)
                }
            </BoxList>
        </>
    )
}

export default Home;