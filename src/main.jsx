import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import Root from "./routes/Root"
import Pricings from './routes/Pricings'
import Work from './routes/Work'
import About from './routes/About'
import Process from './routes/Process'
import Error from './components/Error'
import { Helmet, HelmetProvider } from "react-helmet-async";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
        path: "/",
        element: <App  />,
      },
      {
        path: "/pricings",
        element: <Pricings />
      },
      {
        path: "/work",
        element: <Work />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/process",
        element: <Process />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <HelmetProvider>
    <Helmet>
          <meta charset="UTF-8" />
          <meta name="title" content="Cogin Inc: #1 Choice For Your Design Needs." />
          <meta
            name="description"
            content="We match designers with their clients, like yourself. Get your first results in 24h and forget about missed deadlines. We are dedicated to creating beautiful websites for our clients."
          />
          <meta
            name="keywords"
            content="HTML, CSS, XML, JavaScript, UI Design, Myanmar, Global, Frontend Development, Backend Development, Full-stack Development, Logo Design"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="10 days" />
          <meta name="author" content="Ank Maw Khon" />
        </Helmet>
    <RouterProvider router={router}/>
    </HelmetProvider>
  </React.StrictMode>,
)
