import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './utils/Modals/ModalsContext.tsx';
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ModalProvider>
              <App />
              <ToastContainer/>
            </ModalProvider>
          </BrowserRouter>
        </QueryClientProvider>
  </React.StrictMode>,
)
