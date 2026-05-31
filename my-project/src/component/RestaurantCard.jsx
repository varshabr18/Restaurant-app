import React from "react";
import { RESTRO_IMAGE } from "../constants/endpoint";

export const RestaurantCard = ({ restrocard }) => {
  //console.log(restrocard);
  return (
    <div className="p-2">
      <div className="card" style={{ width: "18rem" }}>
        <img src={RESTRO_IMAGE + restrocard.info.cloudinaryImageId} />
        <div className="card-body">
          <h5 className="card-title">{restrocard.info.name}</h5>
          <p className="card-text">{restrocard.info.cuisines.join(",")}</p>
        </div>
      </div>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" relative top-8 left-2  z-10   bg-black text-blue-50 rounded-xs">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
