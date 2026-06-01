import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestroMenuItemList from "./RestroMenuItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1>Cart is empty, add items</h1>
      ) : (
        <>
          <button className="btn btn-primary ml-20" onClick={handleclearcart}>
            Clear Cart
          </button>
          {cartItems.map((item, index) => (
            <RestroMenuItemList key={item.id || index} itemlists={item} />
          ))}
        </>
      )}
    </div>
  );
}

export default Cart;
