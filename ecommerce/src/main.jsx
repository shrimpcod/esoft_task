import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ProductsProvider } from './context/ProductsContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>

      <ProductsProvider>

        <ModalProvider>

          <App />

        </ModalProvider>

      </ProductsProvider>

    </CartProvider>
  </StrictMode>,
)
