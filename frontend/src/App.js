
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/loginSignup';
function App() { 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="mens"/>}/>
      <Route path='/womens' element={<Shop category="womens"/>}/>
      <Route path='/kids' element={<Shop category="kids"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
