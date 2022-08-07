import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import Navbar from "./components/NavBar";
import FooterComponent from './components/Footer';

import routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            {
              routes.map((route, index) => <Route key={index} path={route.path} component={route.component} />)
            }
            <Navigate from="*" to="/home" />
          </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
