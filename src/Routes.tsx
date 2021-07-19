import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProfileSearch from './pages/ProfileSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profile">
        <ProfileSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;