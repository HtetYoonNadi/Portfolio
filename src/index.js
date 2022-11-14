import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Routes from './routes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';


window.api_url = window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : window.origin + '/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider >
    <Router>
      <Routes />
    </Router>
  </Provider>,
);


