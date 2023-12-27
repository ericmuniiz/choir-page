import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Kits from './pages/Kits';
import Agenda from './pages/Agenda';
import Teste from './pages/TEste';
import App from "./App";

// Define as páginas (rotas) do projeto
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Kits",
    element: <Kits/>
  },
  {
    path: "/Agenda",
    element: <Agenda/>
  },
  {
    path: "/Teste",
    element: <Teste/>
  }
  
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)