import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import { MainWork } from './Components/Work/MainWork.jsx';
import { MainFinances } from './Components/Finances/MainFinances.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to={'/home'}/>
  },
  {
    path:'/home',
    element:<MainWork/>
  },
  {
    path:'/finances',
    element:<MainFinances/>
  }

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
