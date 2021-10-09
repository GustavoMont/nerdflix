import { Bar } from "../../styles/Navigation";
import { handleBackgroundColor } from '../../Utils/handleNavegation';


export default function Navegation({ profilePic }) {
    
    document.body.onscroll = handleBackgroundColor
    return (
        <Bar id="bar">
            <h1>NERDFLIX</h1>
            <img src={profilePic} alt="avatar" />
        </Bar>
    )
}