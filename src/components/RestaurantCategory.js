import { useState } from "react";
import RestaurantList from "./RestaurantList";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 p-2 bg-gray-50 shadow-md ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showIndex ? "⬆️" : "⬇️"}</span>
      </div>
      <div>{showIndex && <RestaurantList itemList={data?.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
