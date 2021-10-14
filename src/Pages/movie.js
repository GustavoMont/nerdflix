import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getTvInfo } from '../Utils/getContent';
import Outdoor from '../Components/Outdoor';
import { GlobalStyle } from '../styles/GlobalStyle';
import Cookies from 'js-cookie';
import Navegation from '../Components/Navegation';
import { goBack } from '../Utils/handleNavegation'

export default function Movie(){
    const image = JSON.parse(Cookies.get('nerdflix')).imageUrl
    const { type ,id } = useParams()
    const history = useHistory()
    const [info, setInfo] = useState(null)
    const [message, setMessage] = useState("AGUARDE UM MOMENTO")
    useEffect(()=>{
        (async () => {
            const info = await getTvInfo(id, type)
            if (!info.poster_path) {
                setMessage("NÃO TEMOS TANTAS INFORMAÇÕES SOBRE ESSA OBRA");
            }
            setInfo(info.poster_path ? info : false)
        })()
    }, [id, type, message])

    

    return(
        <>
            <GlobalStyle />

            <Navegation profilePic={ image } isMovie={true} goBack={() => goBack(history)} />

            {info ? <Outdoor content={info} isPage={true}/> : <h1 id="error">{message}</h1>}
        </>
    )

}