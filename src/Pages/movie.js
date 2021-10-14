import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'; // to get params from another page and can go to last page
import { getTvInfo } from '../Utils/getContent'; 
import Outdoor from '../Components/Outdoor';
import { GlobalStyle } from '../styles/GlobalStyle';
import Cookies from 'js-cookie'; // to get info seted on Login page
import Navegation from '../Components/Navegation';
import { goBack } from '../Utils/handleNavegation' // this function is commented on Util files

export default function Movie(){
    const image = JSON.parse(Cookies.get('nerdflix')).imageUrl // get the user profile picture 
    const { type ,id } = useParams() // get the type of object that was clicked
    const history = useHistory() 
    const [info, setInfo] = useState(null)
    const [message, setMessage] = useState("AGUARDE UM MOMENTO") // message until get all movie/tv show information
    useEffect(()=>{
        (async () => {
            const info = await getTvInfo(id, type) // get info from an especific movie/tv show
            if (!info.poster_path) { // if it doesn't have a poster_path probably it doesn't have any information
                setMessage("NÃO TEMOS TANTAS INFORMAÇÕES SOBRE ESSA OBRA"); // so this message will be shown
            }
            setInfo(info.poster_path ? info : false)
        })()
    }, [id, type, message])

    

    return(
        <>
            <GlobalStyle />

            <Navegation profilePic={ image } isMovie={true} goBack={() => goBack(history)} />

            {info ? <Outdoor content={info} isPage={true}/> : <h1 id="error">{message}</h1>} {/* if it didn't get the info the message will be shown */}
        </>
    )

}