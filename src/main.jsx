import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context.jsx';
import { ThemeProviderWrapper } from './context/theme.context.jsx';
import { CartProviderWrapper } from './context/cart.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <ThemeProviderWrapper>
          <CartProviderWrapper>
            <App />
          </CartProviderWrapper>
        </ThemeProviderWrapper>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>,
);
