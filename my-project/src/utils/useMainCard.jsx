import React, { useEffect, useState } from "react";
import { RESTROCARD_URL } from "../constants/endpoint";

const useMainCard = () => {
  const [restroList, setRestroList] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const restroData = async () => {
    const Data = await fetch(RESTROCARD_URL);
    const Response = await Data.json();
    // console.log(
    //   Response[0].data.cards[4].card.card.gridElements.infoWithStyle
    //     .restaurants,
    // );
    setRestroList(
      Response[0].data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants,
    );
    setSearchFilter(
      Response[0].data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants,
    );
  };

  useEffect(() => {
    restroData();
  }, []);
  return { restroList, searchFilter, setSearchFilter };
};

export default useMainCard;
