import { Header } from "../../styles";

const url = "https://image.tmdb.org/t/p/original"

function Outdoor({ content, titleId }) {
    return (
        <Header background={url + content.backdrop_path} >
            <div className="vertical-gradient">
                <div className="horizontal-gradient">
                    <h1 id={titleId} >{content.name}</h1>
                    <div className="info">
                        <div>
                            <span className="av">Nota: {content.vote_average}</span>
                            <span> {content.number_of_seasons} Temporada{content.number_of_seasons !== 1 ? 's' : ''} </span>
                            <span> Gênero: {content.genres[0].name} </span>
                        </div>
                        <p> {content.overview} </p>
                    </div>
                </div>

            </div>
        </Header>
    )
}

export default Outdoor;