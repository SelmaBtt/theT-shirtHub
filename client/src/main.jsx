import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/root.css'
import ProductContextProvider from './context/ProductContextProvider';
import LogInContextProvider from './context/LogInContextProvider';
import OrderContextProvider from './context/OrderContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogInContextProvider>
      <ProductContextProvider>
        <OrderContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </OrderContextProvider>
      </ProductContextProvider>
    </LogInContextProvider>
  </React.StrictMode>
)
