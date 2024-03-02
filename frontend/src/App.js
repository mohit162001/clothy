
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/loginSignup';

import men_banner from './Component/Assests/banner_mens.png'
import women_banner from './Component/Assests/banner_women.png'
import kid_banner from './Component/Assests/banner_kids.png'
import RootLayOut from './Pages/RootLayOut';

function App() { 
  const router = createBrowserRouter([
    {path:'/',element:<RootLayOut/>,children:[
      {
        path:'',
        element: <Shop />,
      },
      {
        path: "mens",
        element: <ShopCategory banner={men_banner} category="men" />,
      },
      {
        path: "womens",
        element: <ShopCategory banner={women_banner} category="women" />,
      },
      {
        path: "kids",
        element: <ShopCategory banner={kid_banner} category="kid" />,
      },
      {
        path: "product",
        element: <Product />,
        children: [{ path: ":productId", element: <Product /> }],
      },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <LoginSignup /> }
    ]}
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;