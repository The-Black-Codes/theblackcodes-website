import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Navbar from "./components/NavBar";
import FooterComponent from './components/Footer';

import routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            {
              routes.map((route, index) => <Route key={index} path={route.path} component={route.component} />)
            }
            <Redirect from="*" to="/home" />
          </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
