import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import { ClerkProvider } from "@clerk/react"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </BrowserRouter>
)
