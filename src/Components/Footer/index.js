import React from "react";
import { Rodape } from "../../styles/Rodape";


export default function Footer(params) {
    return (
        <Rodape>
            <p>Feito com 💖 por <a href="https://github.com/gustavomont" target="_blank" rel="noreferrer">GustavoMont</a></p>
            <p>Informações retiradas do  <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB (The Movie Data Base)</a> </p>
            <p>Todos os links no código fonte da Página</p>
        </Rodape>
    )
}