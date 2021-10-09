import Modal from '../../styles/Modal'
import React from 'react'


export default function ProfileInfo({ profilePic, name, themes, themeChanger}) {
    return (
        <Modal>
            <div className="settings">
                <header> <img src={profilePic} alt="a" />
                    <h1>Olá, {name || 'Luis'} </h1>
                </header>
                <div className="temas">
                    { themes.map((item) => (<p key={item.name} onClick={() => themeChanger(item)} >Tema {item.name}</p>))}
                </div>
            </div>
        </Modal>
    )
}