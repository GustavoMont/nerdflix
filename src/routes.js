import { Route, Routes, Navigate } from 'react-router-dom' // to manage the routes 
import Home from './Pages/home';
import Login from './Pages/login';
import Cookies from 'js-cookie'
import Movie from './Pages/home/movie';
import AllTvMovies from './Pages/home/AllTvMovies';


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

const Rotas = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
                <Private isAuth={checkLogin} >
                    <Home />
                </Private>
        } >
            <Route index element={<AllTvMovies />} />
            <Route path="/info/:type/:id" element={<Movie />} />
        </Route>
    </Routes>
)
export default Rotas