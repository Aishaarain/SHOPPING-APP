import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQty, decreaseQty,calculateTotal } from './CardSlice';
import { useEffect } from 'react';
const CartPage = () => {
  const {cartItems,total} = useSelector(state => state.cart);
  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <p>${item.price} × {item.quantity}</p>
            <div>
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
            <hr />
                
          </div>
           
        ))
      )
      }
      
       <h3>Total: ${total}</h3>
    </div>
  );
};

export default CartPage;
