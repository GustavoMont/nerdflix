import React, { useState, useEffect } from 'react';
import { getContent, getTvInfo } from '../Utils/getContent'
import { GlobalStyle } from '../styles/GlobalStyle'
import MovieList from '../Components/MovieList'
import ProfileInfo from '../Components/ProfileInfo';
import Outdoor from '../Components/Outdoor';
import Navegation from '../Components/Navegation';
import { useLocation } from 'react-router';
const placeHolderUserPic = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'

const Home = () => {
    const [content, setContent] = useState([])
    const [outdoorInfo, setOutdoorInfo] = useState(null)
    const themes = [{name: 'Padrão', mainColor: '#d90912'}, {name: 'Matrix', mainColor: 'rgb(48, 221, 42)'} ]
    const [theme, setTheme] = useState(themes[0])
    const randomGenerator = (length) => Math.floor(Math.random() * (length - 1))
    let { image, isLogged, name } = useLocation()
    
    useEffect(() => {
        (async () => {
            const conteudo = await getContent()
            setContent(conteudo)
            const index = randomGenerator(conteudo[0].lista.length)
            const info = await getTvInfo(conteudo[0].lista[index].id)
            setOutdoorInfo(info)
        })()
    }, [image, isLogged, name])

    return (
        <>
            <GlobalStyle theme={theme} />
            
            <ProfileInfo profilePic={ image || placeHolderUserPic } themes={themes} themeChanger={setTheme} />

            <Navegation profilePic={ image || placeHolderUserPic }/>
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