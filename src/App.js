import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/layout/Main';
import { ProductAndCartLoader } from './components/Loaders/ProductAndcartLoader';

import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/routes/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';



function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/shipping', element:
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
        },
        {
          path: '/orders',
          loader: ProductAndCartLoader,
          element: <Orders></Orders>
        },
        { path: '/about', element: <About></About> },
        { path: '/inventory', element: <PrivateRoute><Inventory></Inventory></PrivateRoute> },
        { path: '/login', element: <Login></Login> },
        { path: '/signup', element: <Signup></Signup> }
      ]
    },




  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
