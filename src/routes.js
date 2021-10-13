import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Home from './Pages';
import Login from './Pages/login';
import Movie from './Pages/movie';
import Cookies from 'js-cookie'


const checkLogin = () => {
    try{
        return JSON.parse(Cookies.get('teste-nerdflix')).isLogged
    } catch {
        return false;
    }
}

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
            <Route  path="/watch/:type/:id" component={Movie}/>
        </Switch>
    </Router>
)