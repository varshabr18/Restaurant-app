import React from "react";
import { RESTROLIST_IMAGE } from "../constants/endpoint";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";

function RestroMenuItemList({ itemlists }) {
  const dispatch = useDispatch();
  const cartitem = useSelector((store) => store.cart.items);

  const handleAddbtnClick = () => {
    dispatch(addItem(itemlists));
  };
  //console.log(itemlists);
  return (
    <div>
      <div className="container">
        <div className="row className=card pb-10">
          <div className="col-md-8 ">
            <p>{itemlists.name}</p>
            <p>Price :{itemlists.price}</p>
            <p>{itemlists.description}</p>
          </div>
          <div className="col-md-4">
            <img src={`${RESTROLIST_IMAGE}${itemlists.imageId}`} />
            <button
              className="btn btn-primary relative bottom-6 left-25"
              onClick={handleAddbtnClick}
            >
              Add+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestroMenuItemList;
