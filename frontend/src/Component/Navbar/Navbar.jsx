import React, { useState } from 'react'
import './navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShowContext';
import { clearData, getUserData } from '../../helper';


function Navbar() {
    const [menu,setMenu] = useState('shop');
    const navigate = useNavigate()
    const {getTotalCartItems,cartValue}=useContext(ShopContext);
    const token = getUserData('token')
    function handleLogOut(){
        clearData();
        navigate('/login')
    }
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p><Link>CLOTHY</Link></p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='shop'? <hr/>:<></>} </li>
            <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu==='mens' ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>{menu==='womens' ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==='kids' ? <hr/>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{cartValue}</div>{token? <Link onClick={handleLogOut}><button>Log out</button></Link>: <Link to='/login'><button>Login</button></Link>}
        </div>
    </div>
  )
}

export default Navbar