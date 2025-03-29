import React from "react";
import { assets } from "../assets/assets";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {name, avgRating, sla, cuisines, cloudinaryImageId } = resData?.info;
  return (
    <div>
      <div className="flex flex-col w-56 m-4 cursor-pointer hover:scale-[0.9] transition-all 500ms">
      <div className="flex items-center justify-center w-full h-36 mb-2 overflow-hidden rounded-lg">
        <img
          className="w-full"
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="res-card-img"
        />
      </div>
      <b>{name}</b>
      <div className="flex font-semibold">
        <div className="flex">
          <img className="flex mr-1" width="20px" src={assets.rating} />
          <p>{avgRating} </p>
        </div>
        <div>
          <p> * {sla.slaString}</p>
        </div>
      </div>
      <p>{cuisines.join(", ")}</p>
    </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard)=>{
  return ({resData})=>{
    return(
      <div>
        <label className="bg-green-400 text-white px-2 absolute top-5">Promoted</label>
        <RestaurantCard resData={resData}/>
      </div>
    )
  }
}

export default RestaurantCard;
