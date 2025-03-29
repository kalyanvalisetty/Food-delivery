import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router";
import { RESTAURANTS_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const Body = () => {
  const [ListofRestaurants,setListofRestaurants] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const {loggedInUser, setUserInfo} = useContext(UserContext)

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();

    const restaurantCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setFilteredList(restaurants);
    setListofRestaurants(restaurants);
  };

  const searchfunc = () => {
    setFilteredList(
      ListofRestaurants.filter((item) => item?.info?.name.toLowerCase().includes(searchtext.toLowerCase()))
    );
  };

  const filter = ()=>{
    setFilteredList(
      ListofRestaurants.filter((item) => item?.info?.avgRating >= 4.0)
    );
  }

  return (
    <div>
      <div className="sm:flex items-center justify-center p-4 bg-white w-full sticky">
        <div className="flex mr-5 text-base">
          <input
            className="bg-slate-200 w-[25vw] min-w-[300px] rounded-s-full pl-5 outline-none"
            type="search"
            placeholder="Search for restaurant and food"
            value={searchtext} onChange={(e)=>{setSearchtext(e.target.value)}}
          />
          <button className="bg-primary text-white p-4 rounded-e-full" onClick={()=>{searchfunc()}}>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <button
          onClick={() => setFilteredList(ListofRestaurants)}
          className="m-2 bg-primary text-white rounded-full p-4"
        >
          ALL
        </button>
        <button
          onClick={() => filter()}
          className="m-2 bg-primary text-white rounded-full p-4"
        >
          Top Rated
        </button>
        <input
        className="bg-slate-200 pl-5 outline-none"
        value={loggedInUser}
        type="text" onChange={(e)=>setUserInfo(e.target.value)}
        placeholder="User Name"/>
      </div>
      <div className="flex flex-wrap px-[15vw] relative group">
        {ListofRestaurants == null ? (
          <Shimmer />
        ) : (
          filteredList.map((item) => (
            
           <Link key={item?.info?.id}  to={`/restaurants/${item?.info?.id}`}>
            {(item?.info?.promoted == true)?
               <RestaurantCardPromoted resData={item}/>:
              <RestaurantCard resData={item} />
            }
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
