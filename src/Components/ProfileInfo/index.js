import Modal from '../../styles/Modal'
import React from 'react'


export default function ProfileInfo({ profilePic, name}) {
    return (
        <Modal>
            <div className="settings">
                <header> <img src={profilePic} alt="a" />
                    <h1>Olá, {name || 'Luis'} </h1>
                </header>
                <div className="temas">
                    <p>Tema Padrão</p>
                    <p>Tema Matrix</p>
                </div>
            </div>
        </Modal>
    )
}