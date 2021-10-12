import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTvInfo } from '../Utils/getContent';
import Outdoor from '../Components/Outdoor';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function Movie(){

    const { type ,id } = useParams()
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
            {info ? <Outdoor content={info} isPage={true}/> : <h1 id="error">{message}</h1>}
        </>
    )

}