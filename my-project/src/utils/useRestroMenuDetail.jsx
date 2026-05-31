import React from "react";
import { RESTROCARD_URL } from "../constants/endpoint";
import { useEffect, useState } from "react";

function useRestroMenuDetail(resId) {
  const [RestroDetailMenu, setRestroDetailMenu] = useState([]);

  const restroDetails = async () => {
    const restroDetailData = await fetch(`${RESTROCARD_URL}/${resId}`);
    const restroResponse = await restroDetailData.json();
    console.log(restroResponse);
    setRestroDetailMenu(restroResponse);
  };

  useEffect(() => {
    restroDetails();
  }, []);
  return RestroDetailMenu;
}

export default useRestroMenuDetail;
