import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      className="p-4 m-4 w-64 bg-gray-100 hover:bg-gray-200 rounded-lg h-[430px] text-center"
      data-testid="resCard"
    >
      <img
        className="rounded-lg w-64 h-44"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold text-lg p-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}⭐</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} mins</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
