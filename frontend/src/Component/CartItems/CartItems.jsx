import React, { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../../Context/ShowContext'
import remove_icon from '../Assests/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((i)=>{
            if(cartItems[i.id]>0)
            {
                return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={i.image} alt="" className='carticon-product-icon' />
                                <p>{i.name}</p>
                                <p> ₹{i.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[i.id]}</button>
                                <p> ₹{i.new_price * cartItems[i.id]}</p>
                                <img src={remove_icon} onClick={()=>{removeFromCart(i.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p> ₹{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3> ₹{getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have promocode, Enter here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promocode' />
                    <button type='submit'>Apply</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems