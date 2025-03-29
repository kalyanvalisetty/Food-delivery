import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestauarantMenu = (resId)=>{
    
    let [resInfo, setresInfo] = useState(null);

    useEffect(() => {fetchMenu()},[]);

    const fetchMenu = async () => {
      const data = await fetch(MENU_API_URL+resId);
      const json = await data.json();
      setresInfo(json?.data);
    };
    
    return resInfo;
}

export default useRestauarantMenu;


