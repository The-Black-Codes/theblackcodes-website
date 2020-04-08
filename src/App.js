import React, { Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Navbar from "./components/NavBar";
import Loader from './components/Loader';
import FooterComponent from './components/Footer';

import routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={Loader}>
          <Switch>
            {
              routes.map((route, index) => <Route key={index} path={route.path} component={route.component} />)
            }
            <Redirect from="*" to="/home" />
          </Switch>
        </Suspense>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
