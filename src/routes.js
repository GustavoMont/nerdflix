import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom' // to manage the routes 
import Home from './Pages';
import Login from './Pages/login';
import Movie from './Pages/movie';
import Cookies from 'js-cookie'
import Favorites from './Pages/favorites';

const checkLogin = () => {
    // if doesn't get the the cookie will return false
    try {
        return JSON.parse(Cookies.get('nerdflix')).isLogged 
    } catch (error) {
        return false
    }
}
// the privateroute will be renderized only if is logged
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
    <Route
        {...rest}
        render={props => checkLogin() ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
)}


export const Routes = () => (
    <Router>
        <Switch>
            <Route component={Login}  path="/login" />
            <PrivateRoute exact path="/" component= {Home} />   
            <PrivateRoute path="/favorites" component={Favorites} />
            <PrivateRoute  path="/watch/:type/:id" component={Movie}/>
        </Switch>
    </Router>
)