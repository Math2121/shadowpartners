import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global/index.css'
import { SnackbarProvider } from 'notistack'
import { DataProvider } from './context/DataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </DataProvider>
  </React.StrictMode>,
)
