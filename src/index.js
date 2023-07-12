import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './Helper/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>
);
