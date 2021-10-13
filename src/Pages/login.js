import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { Header } from '../styles/Header'
import { GlobalStyle } from '../styles/GlobalStyle'
import { GoogleLogin } from 'react-google-login';
import Cookies from 'js-cookie'



const url = "https://pipocasclub.com.br/wp-content/uploads/2019/10/netflix-3.jpg"

const Login = () => {
    
    const [loggedIn, setLoggedIn] = useState(false)
    const [fail, setFail] = useState(false)
    const [image, setImage] = useState(false)
    const failGoogle = () => setFail(true)
    const responseGoogle = (response) => {
        const { imageUrl } = response.profileObj
        setImage(imageUrl)
        setLoggedIn(true)
    }
    
    document.body.onscroll = null
    
    useEffect(() => {
        const cookieData = JSON.stringify({isLogged: loggedIn, imageUrl: image})
        Cookies.set('teste-nerdflix', cookieData)
    }, [loggedIn, image])
    return (
        <>
            <GlobalStyle  />
            <Header background={url}>
                <div className="vertical-gradient">
                    <div className="horizontal-gradient">
                        <div className="login">
                            <h1>LOGIN</h1>
                            <GoogleLogin
                                clientId="661258702797-3b302facu7f5i1lklffd67cqscl4tf4m.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={failGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                            {loggedIn ? <Redirect exact to={{ pathname: "/", image: image, isLogged: loggedIn}} /> : ''}
                            {fail ? <p id="fail-message">Ocorreu algum erro!! Tente Novamente Mais tarde</p> : ''}
                        </div>
                    </div>
                </div>
            </Header>
        </>

    )
}

export default Login;