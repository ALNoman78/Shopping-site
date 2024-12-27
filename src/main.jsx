import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Cart from './components/Cart/Cart.jsx';
import Details from './components/Details/Details.jsx';
import { ToastContainer } from 'react-toastify';
import Adjust from './components/AdjustCM/Adjust.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: () => fetch('/bookData.json')
      },
      {
        path : '/cart',
        element : <Adjust></Adjust>
      },
      {
        path: '/product/:productId',
        element: <Details></Details>,
        loader: () => fetch('/bookData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
