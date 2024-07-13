import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'


import Home from './Components/Home/Home.jsx'
import Program from './Components/Program/Program.jsx'

import ContactUs from './Components/ContactUs/ContactUs.jsx'
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx'
import Clubs from './Components/Clubs.jsx'
import COADERS from './Components/COADERS/COADERS.jsx'
import AESTHETICA from './Components/AESTHETICA/AESTHETICA.jsx'
import CAMERAWORK from './Components/CAMERAWORK/CAMERAWORK.jsx'
import LITWITS from './Components/LITWITS/LITWITS.jsx'
import HRIDMAJHARE from './Components/HRIDMAJHARE/HRIDMAJHARE.jsx'
import TINTTalkies from './Components/TINT Talkies/TINT Talkies.jsx'





const router =createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children :[
      { path:"/Home",
         element:<Home />
      },
      { path: "program",
        element: <Program />
      },
      { path: "clubs",
        element: < Clubs/>
      },
      {path:"contactus",
        element: <ContactUs/>
      },
      {
        path:"",
        element:<LoginSignup/>
      },
      {
        path:"/COADERS",
        element:<COADERS />
      },
      {
        path:"/AESTHETICA",
        element:<AESTHETICA />
      },
      {
        path:"/CAMERAWORK",
        element:<CAMERAWORK />
     },
     {
      path:"/LITWITS",
      element:<LITWITS />
     },
     {
      path:"/HRIDMAJHARE",
      element:<HRIDMAJHARE />
     },
     {
      path:"/TINTTALKIES",
      element: <TINTTalkies />
     }
     
    
      
      
     
     
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
           
    
    
  </React.StrictMode>,
)
