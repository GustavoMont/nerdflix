import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Home from './Pages';
import Login from './Pages/login';
import Movie from './Pages/movie';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
    <Route
        {...rest}
        render={props => props.location.isLogged ? (
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