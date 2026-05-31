import React from "react";
import { RESTROLIST_IMAGE } from "../constants/endpoint";

function RestroMenuItemList({ itemlists }) {
  console.log(itemlists);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 className=card">
            <p>{itemlists.name}</p>
            <p>{itemlists.price}</p>
            <p>{itemlists.description}</p>
          </div>
          <div className="col-md-4">
            <img src={`${RESTROLIST_IMAGE}${itemlists.imageId}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestroMenuItemList;
