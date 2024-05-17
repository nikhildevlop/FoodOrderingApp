import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestaurantList = (props) => {
  const dispatch = useDispatch();

  const handleAddItem = (card) => {
    dispatch(addItem(card));
  };

  return (
    <div>
      {console.log(props)}
      {props.itemList.map((card) => (
        <div
          data-testid="foodItems"
          key={card?.card?.info.imageId}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{card?.card?.info.name} </span>
              <span>
                - ₹
                {card?.card?.info.defaultPrice
                  ? card?.card?.info.defaultPrice / 100
                  : card?.card?.info.price / 100}
              </span>
            </div>
            <p className="text-xs text-gray-400">
              {card?.card?.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 w-24 rounded-lg bg-white text-grey shadow-lg translate-x-6 translate-y-28 shadow-cyan-500/50"
                onClick={() => handleAddItem(card)}
              >
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + card?.card?.info.imageId}
              className="rounded-lg h-36 w-40"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
