import { Bar } from "../../styles/Navigation";
import { handleBackgroundColor } from '../../Utils/handleNavegation'; // function commented on Utils files 
import { ArrowBack } from '@material-ui/icons' 

const placeHolderUserPic = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' // if can't get the user profile picture will be used this image

export default function Navegation({ profilePic, isMovie, goBack }) {
    
    document.body.onscroll = handleBackgroundColor // to control the opcity
    return (
        <Bar id="bar">
            { isMovie ? <ArrowBack style={{fontSize: 40}} id="back" onClick={goBack}/> : (<h1>NERDFLIX</h1>) } {/* If it be renderized on Movie Page it will have an arrowback button */}
            <img src={profilePic || placeHolderUserPic } alt="avatar" />
        </Bar>
    )
}