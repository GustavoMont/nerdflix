import { Bar } from "../../styles";
import { handleBackgroundColor } from '../../Utils/handleNavegation';

const placeHolderUserPic = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'

export default function Navegation({ profilePic }) {
    
    document.body.onscroll = handleBackgroundColor
    return (
        <Bar id="bar">
            <h1>NERDFLIX</h1>
            <img src={profilePic || placeHolderUserPic } alt="avatar" />
        </Bar>
    )
}