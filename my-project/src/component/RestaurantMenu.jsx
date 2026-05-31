import { useParams } from "react-router-dom";
import useRestroMenuDetail from "../utils/useRestroMenuDetail";
import RestroMenuItems from "./RestroMenuItems";
import { useState } from "react";

function RestaurantMenu() {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const RestroDetailMenu = useRestroMenuDetail(resId);
  // console.log(RestroDetailMenu);
  const categories = RestroDetailMenu?.categories || [];

  return (
    <div>
      <h1 className="text-center mt-10">{RestroDetailMenu.name}</h1>
      {categories.map((items, index) => (
        <RestroMenuItems
          items={items}
          showItems={showIndex === index}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
