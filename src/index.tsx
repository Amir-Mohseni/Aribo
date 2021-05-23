import React from 'react';
import ReactDOM from 'react-dom';

// CSS Imports
import './index.css';
import './assets/css/icofont.min.css';
import './assets/css/icomoon.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './assets/css/style.css';
import './assets/css/responsive.css';

// JS Imports
import 'bootstrap/dist/js/bootstrap'

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

