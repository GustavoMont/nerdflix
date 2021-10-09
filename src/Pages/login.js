import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { Header, GlobalStyle } from '../styles'
import { GoogleLogin } from 'react-google-login';




const url = "https://pipocasclub.com.br/wp-content/uploads/2019/10/netflix-3.jpg"

const Login = () => {
    const responseGoogle = (response) => {
        const { imageUrl } = response.profileObj
        setImage(imageUrl)
        setLoggedIn(true)
    }
    
    const failGoogle = () => setLoggedIn(false)
    const [loggedIn, setLoggedIn] = useState(true)
    const [image, setImage] = useState(false)
    
    document.body.onscroll = null
    
    useEffect(() => {

    }, [loggedIn, image])

    return (
        <>
            <GlobalStyle />
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
                        </div>
                    </div>
                </div>
            </Header>
        </>

    )
}

export default Login;