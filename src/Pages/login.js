import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer'
import { Redirect } from 'react-router-dom' // Component to redirect to home page
import { Header } from '../styles/Header'
import { GlobalStyle } from '../styles/GlobalStyle'
import { GoogleLogin } from 'react-google-login'; // lib to help with Google Auth2
import Cookies from 'js-cookie' // lib to help with cookies


// background image
const url = "https://pipocasclub.com.br/wp-content/uploads/2019/10/netflix-3.jpg"

const Login = () => {
    
    const [loggedIn, setLoggedIn] = useState(false) // initial state of login
    const [fail, setFail] = useState(false) // if the auth fail
    const [image, setImage] = useState(false) // if get image
    const failGoogle = () => setFail(true) // if auth fail it set fail to true
    const responseGoogle = (response) => { // if auth be succed
        const { imageUrl } = response.profileObj // will get only profile picture from the account
        setImage(imageUrl) // will set image to this Url
        setLoggedIn(true) // will set login to true
    }
    
    document.body.onscroll = null // cancel the scroll event
    
    useEffect(() => {
        const cookieData = JSON.stringify({isLogged: loggedIn, imageUrl: image}) // turn this object a JSON to set it in a Cookie
        Cookies.set('nerdflix', cookieData) // set the nerdflix cookie with de data 
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
                                clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={failGoogle}
                                cookiePolicy={'single_host_origin'}
                            /> {/* Google Auth Button */}
                            {loggedIn ? <Redirect exact to={{ pathname: "/", image: image, isLogged: loggedIn}} /> : ''} {/* if login succeed will redirect to home page */}
                            {fail ? <p id="fail-message">Ocorreu algum erro!! Tente Novamente Mais tarde</p> : ''} {/** if fails will show this message */}
                        </div>
                    </div>
                </div>
            </Header>

            <Footer />
            
        </>

    )
}

export default Login;