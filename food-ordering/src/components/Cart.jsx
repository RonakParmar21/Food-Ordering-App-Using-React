import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import FoodCard from './FoodCard';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        // dispatch an action to clear the cart
        dispatch(clearCart());
    }

  return (
    <div>
        <h1 className="text-2xl font-bold">Cart Items - {cartItems.length}</h1>

        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>clear cart</button>
        <ul>
            {
                cartItems.length === 0 && <h1>No items in the cart</h1>
            }
            {
                cartItems.map((item) => (
                    <li key={item.info.id}>
                        <FoodCard resData={item} />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Cart
