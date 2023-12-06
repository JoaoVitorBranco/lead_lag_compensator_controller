import React from 'react'
import ReactDOM from 'react-dom/client'
import SettingsPage from './pages/SettingsPage'
import GraphPage from './pages/GraphPage'


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SettingsPage/>,
    },
    {
      path: "/graph",
      element: <GraphPage/>,
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)