import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Events from './pages/Events';

const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/events', exact: true, name: 'Events', component: Events },
  { path: '/about', exact: true, name: 'About', component: About },
  { path: '/contact', exact: true, name: 'Contact', component: Contact }
];

export default routes;