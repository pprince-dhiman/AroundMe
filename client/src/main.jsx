import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import { ClerkProvider } from "@clerk/react"
import './index.css'
import "leaflet/dist/leaflet.css";
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Provider store={store} >
        <App />
      </Provider>
    </ClerkProvider>
  </BrowserRouter>
)
