import { Route, Switch } from 'react-router-dom';
import FetchUser from './components/auth/FetchUser';
import MainNavbar from './components/shared/MainNavbar';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)


export default App;
