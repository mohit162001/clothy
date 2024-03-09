import React, { createContext, useEffect, useState } from "react";
import all_product from '../Component/Assests/all_product';
import { checkAuth, getUserData } from "../helper";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CART_DETAILS } from "../query/query";

export const ShopContext = createContext(null);

const getDefalutCart=()=>{
    let cart = {};
    for(let i = 0; i<all_product.length+1; i++){
        cart[i]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefalutCart());
    const [cartValue,setCartValue] = useState(0)
    const navigate = useNavigate()
    const id = getUserData('id')
    const {data} = useQuery(GET_CART_DETAILS,{
      variables:{
        id:id
      }
    })
    
    useEffect(() => {
        if (data && data.carts && data.carts.data.length > 0) {
            setCartValue(data.carts.data[0].attributes.products.data.length);
        } else {
            setCartValue(0);
        }
    }, [data]);
    
    
    const addToCart = (itemId) =>{
        if(checkAuth()===true){
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
                console.log('boi')
            }
            
        }
        return totalAmount; 
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart,cartValue,setCartValue};
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 