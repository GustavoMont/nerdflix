import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // to get params from another page and can go to last page
import { getTvInfo } from '../../Utils/getContent';
import Outdoor from '../../Components/Outdoor';
import { useDispatch } from 'react-redux'

export default function Movie(){ 
    const { type ,id } = useParams() // get the type of object that was clicked
    const [info, setInfo] = useState(null)
    const [message, setMessage] = useState("AGUARDE UM MOMENTO") // message until get all movie/tv show information
    const dispatch = useDispatch()

    useEffect(()=>{
        (async () => {
            const info = await getTvInfo(id, type) // get info from an especific movie/tv show
            if (!info.poster_path) { // if it doesn't have a poster_path probably it doesn't have any information
                setMessage("NÃO TEMOS TANTAS INFORMAÇÕES SOBRE ESSA OBRA"); // so this message will be shown
            }
            setInfo(info.poster_path ? info : false)
            dispatch({type: 'CHANGE_MENU', menuHome: false})
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>

            {info ? <Outdoor content={info} isPage={true}/> : <h1 id="error">{message}</h1>} {/* if it didn't get the info the message will be shown */}

        </>
    )

}