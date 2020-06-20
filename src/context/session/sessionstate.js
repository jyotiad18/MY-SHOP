import React, { useState, useEffect } from "react";
import SessionContext from "../session/sessioncontext";
import { fetchData, methodNum } from '../../utils/service.js';

const SessionState = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [shoppingList, setShoppingList] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);

    const handleLogIn = () => {
        const sessionUser = sessionStorage.getItem("username");
        if (sessionUser !== null) {
            setIsLogin(!isLogin);
            setUsername(sessionUser);
        }
   };
    const handleLogOut = () => {
        sessionStorage.clear();
        setIsLogin(false);
        setUsername("");
    };
  
    const handleAddShopping = async(data) => {
        const resp = await fetchData("shoppingcart/Add", methodNum.POST, data);
        setShoppingList(resp);
        setTotalProduct(resp.length);
        getTotalAmount();
    }

    const getTotalAmount = async () => {
        const resp = await fetchData(`shoppingcart/totalAmount/${localStorage.getItem('cartId')}`, methodNum.GET);
        setTotalAmount(resp.total_amount);
    }

    const deleteShoppingCart = async (items_id) => {
        await fetchData(`shoppingcart/removeProduct/${items_id}`, methodNum.DELETE);
        getAllShopping();
    }

    const getAllShopping = async () => {
        const resp = await fetchData(`shoppingcart/${localStorage.getItem('cartId')}`, methodNum.GET)
        setShoppingList(resp);
        setTotalProduct(resp.length);
        getTotalAmount();
    }
    
    useEffect(async () => {
        if (localStorage.getItem('cartId') != undefined || localStorage.getItem('cartId') != null)
       {
           getAllShopping();
           handleLogIn();
        } else {
            const resp = await fetchData("shoppingcart/generateUniqueId", methodNum.GET);
            localStorage.setItem('cartId', resp.cart_id);
        }       
    },[]);  
    return (
        <SessionContext.Provider
            value={{
                isLogin,
                username,
                totalAmount,
                totalProduct,
                shoppingList,
                handleLogIn,
                handleLogOut,
                handleAddShopping,
                deleteShoppingCart
            }}
        >
            {props.children}
        </SessionContext.Provider>
    );
};
export default SessionState;
