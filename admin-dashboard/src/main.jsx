import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import ErrorPage from './ErrorPage.jsx';

import Home from './components/home/home.jsx';
import Product from './components/product/Product.jsx';
import User from './components/user/User.jsx';
import Login from './components/login/Login.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="user" element={<User />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: []
//   },
//   {
//     path: 'home',
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: 'product',
//     element: <Product />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: 'user',
//     element: <User />,
//     errorElement: <ErrorPage />,
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
