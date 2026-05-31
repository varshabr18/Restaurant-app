import React from "react";
import RestroMenuItemList from "./RestroMenuItemList";

function RestroMenuItems({ items, showItems, setShowIndex }) {
  //giving acces to parent
  // const [showcarosel, setShowCarosel] = useState(false);

  const handleCarosel = () => {
    setShowIndex();
  };
  return (
    <div className=" w-2/3 ml-50">
      <p
        className="text-center bg-gray-200 shadow-xl cursor-pointer"
        onClick={handleCarosel}
      >
        {items.title} ⬇️
      </p>
      {items.itemCards.map(
        (itemlists) =>
          showItems && <RestroMenuItemList itemlists={itemlists} />,
      )}
    </div>
  );
}

export default RestroMenuItems;
