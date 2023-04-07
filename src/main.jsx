import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './Home/Home';
import Friends from './components/Friends/Friends';
import FriendsDetails from './components/FriendDetails/FriendsDetails';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorMes/>,
//   },
//   {
//     path: "/about",
//     element: <About/>,
//   },
//   {
//     path:"/contact",
//     element:<Contact></Contact>
//   }
// ])


const router=createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>
      },{
        path:"contact",
        element:<Contact></Contact>
      }
      ,{
        path:"friends",
        element:<Friends/>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"friend/:friendId",
        element: <FriendsDetails></FriendsDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
