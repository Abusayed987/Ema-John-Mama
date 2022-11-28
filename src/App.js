import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Main from './components/layout/Main';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';



function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        { path: '/', element: <Shop></Shop> },
        { path: '/orders', element: <Orders></Orders> },
        { path: '/about', element: <About></About> },
        { path: '/inventory', element: <Inventory></Inventory> },
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
