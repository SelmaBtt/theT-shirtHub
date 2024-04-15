import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/root.css'
import ProductContextProvider from './context/ProductContextProvider';
import LogInContextProvider from './context/LogInContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogInContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductContextProvider>
    </LogInContextProvider>
  </React.StrictMode>
)
