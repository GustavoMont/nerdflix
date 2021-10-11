import { Header } from "../../styles/Header"
import { handleOverview } from '../../Utils/handleOutdoor'
const url = "https://image.tmdb.org/t/p/original"

function Outdoor({ content, titleId }) {
    
    const overview = handleOverview(content.overview)
    return (
        <Header background={url + content.backdrop_path} >
            <div className="vertical-gradient">
                <div className="horizontal-gradient">
                    <h1 id={titleId} >{content.name}</h1>
                    <div className="info">
                        <div>
                            <span className="av">Nota: {content.vote_average}</span>
                            <span>{content.first_air_date.split('-')[0]}</span>
                            <span> {content.number_of_seasons} Temporada{content.number_of_seasons !== 1 ? 's' : ''} </span>
                        </div>
                        <p>{overview}</p>
                        <p className="genres"> Gênero: {content.genres[0].name} </p>
                    </div>
                </div>

            </div>
        </Header>
    )
}

export default Outdoor;