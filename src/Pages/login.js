import React from 'react';
import { Link } from 'react-router-dom'
import { Header, GlobalStyle } from '../styles'

const url = "https://pipocasclub.com.br/wp-content/uploads/2019/10/netflix-3.jpg"

const Login = () => {
    document.body.onscroll = null
    return (
        <>
            <GlobalStyle />
            <Header background={url}>
                <div className="vertical-gradient">
                    <div className="horizontal-gradient">
                        <div className="login">
                            <h1>LOGIN</h1>
                            <Link to="/home">Login with Google</Link>
                        </div>
                    </div>
                </div>
            </Header>
        </>

    )
}

export default Login;