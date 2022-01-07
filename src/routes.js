import { Route, Routes, Navigate } from 'react-router-dom' // to manage the routes 
import Home from './Pages/home';
import Login from './Pages/login';
import Cookies from 'js-cookie'
import Movie from './Pages/home/movie';
import AllTvMovies from './Pages/home/AllTvMovies';
import Navegation from './Components/Navegation';
import { useSelector } from 'react-redux'
import Favorites from './Pages/home/Favorites';

const checkLogin = () => {
    // if doesn't get the the cookie will return false
    try {
        return JSON.parse(Cookies.get('nerdflix')).isLogged
    } catch (error) {
        return false
    }
}

const Private = ({ isAuth, children }) => (
    isAuth() ? (
        children
    ) : (
        <Navigate to="/login" />
    )
)
// the privateroute will be renderized only if is logged

const Rotas = () => {
    const menuHome = useSelector(state => state.menuHome)
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <Private isAuth={checkLogin} >
                    <Navegation  menuHome={menuHome} />
                    <Home />
                </Private>
            } >
                <Route index element={<AllTvMovies />} />
                <Route path="/info/:type/:id" element={<Movie />} />
                <Route path="/favorites" element={<Favorites />} />
            </Route>
        </Routes>
    )
}
export default Rotas
