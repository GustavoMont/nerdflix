import { Bar } from "../../styles/Navigation";
import { handleBackgroundColor } from '../../Utils/handleNavegation'; // function commented on Utils files 
import { ArrowBack } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'; // to get info seted on Login page
const placeHolderUserPic = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' // if can't get the user profile picture will be used this image

export default function Navegation({ menuHome }) {
    const image = JSON.parse(Cookies.get('nerdflix')).imageUrl // get image url from user email from cookies seted on login page
    const navigate = useNavigate()
    document.body.onscroll = handleBackgroundColor // to control the opcity
    
    return (
        <Bar id="bar">
            { !menuHome ? <ArrowBack style={{fontSize: 40}} id="back" onClick={() => navigate(-1)}/> : (<h1>NERDFLIX</h1>) } {/* If it be renderized on Movie Page it will have an arrowback button */}
            <img src={image || placeHolderUserPic } alt="avatar" />
        </Bar>
    )
}