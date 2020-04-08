import React from 'react';
// import $ from 'jquery';

// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;

const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const Events = React.lazy(() => import('./pages/Events'));

const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/contact', exact: true, name: 'Contact', component: Contact },
  { path: '/about', exact: true, name: 'About', component: About },
  { path: '/events', exact: true, name: 'Events', component: Events }
];

export default routes;