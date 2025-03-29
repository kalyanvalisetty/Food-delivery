import ResmenuCard from "../components/ResmenuCard";
import { ShimmerMenu } from "../components/Shimmer";
import useRestauarantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import { useParams } from "react-router";

const Resmenu = () => {
  let [searchItem, setsearchItem] = useState("");
  let [showIndex, setShowIndex] = useState(0);

  let {resId} = useParams()
  let resInfo = useRestauarantMenu(resId)

  
  if (resInfo == null) {
    return (
    <ShimmerMenu />
    )
  }

  const { text } = resInfo?.cards[0]?.card?.card;
  const menuCardList = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  );

  const menucards = menuCardList?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((i)=>i?.card?.card?.["@type"].includes("ItemCategory")) || [];

  return (
    <div>
      <div className="sm:flex items-center justify-center p-4 bg-white w-full sticky">
        <div className="flex mr-5 text-base">
          <input
            className="bg-slate-200 w-[25vw] min-w-[300px] rounded-s-full pl-5 outline-none"
            type="search"
            placeholder="Search for restaurant and food"
            value={searchItem} onChange={(e)=>{setsearchItem(e.target.value)}}
          />
          <button className="bg-primary text-white p-4 rounded-e-full" onClick={()=>{searchfunc()}}>
            <i className="bi bi-search"></i>
          </button>
        </div>
       
      </div>
      <div className="px-[5vw] md:px-[15vw]">
        <h1 className="text-2xl font-bold mb-4">{text}</h1>
        {menucards.map((item, index) => (
          <ResmenuCard key={index} resData={item} 
          showList={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index) // Toggle logic
          }
          />
        ))}
      </div>
    </div>
  );
};

export default Resmenu;
