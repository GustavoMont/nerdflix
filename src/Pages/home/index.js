import { GlobalStyle } from '../../styles/GlobalStyle' // style to all page
import Cookies from 'js-cookie'; // to get user information
import Navegation from '../../Components/Navegation'; // has the title and profile user picture
import { Outlet } from 'react-router-dom';


export default function Home (){
    
    const image = JSON.parse(Cookies.get('nerdflix')).imageUrl // get image url from user email from cookies seted on login page
    return (
        <>
            <GlobalStyle  />
            
            <Navegation profilePic={ image }/>

            <Outlet /> 
            
        </>
    )
}
