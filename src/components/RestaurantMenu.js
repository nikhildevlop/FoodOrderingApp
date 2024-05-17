import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resID } = useParams();

  const resMenu = useRestaurantMenu(resID);

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;

  const itemCardsFilter =
    resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold m-2 p-2">{name}</h1>
      <h3 className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <div>
        {itemCardsFilter.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showIndex={index === showIndex ? true : false}
            setShowIndex={() =>
              showIndex === index ? setShowIndex(false) : setShowIndex(index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
