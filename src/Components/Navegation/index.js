import { Bar } from "../../styles/Navigation";
import { handleBackgroundColor } from '../../Utils/handleNavegation';
import { ArrowBack } from '@material-ui/icons'

const placeHolderUserPic = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'

export default function Navegation({ profilePic, isMovie, goBack }) {
    
    document.body.onscroll = handleBackgroundColor
    return (
        <Bar id="bar">
            { isMovie ? <ArrowBack style={{fontSize: 40}} id="back" onClick={goBack}/> : (<h1>NERDFLIX</h1>) }
            <img src={profilePic || placeHolderUserPic } alt="avatar" />
        </Bar>
    )
}