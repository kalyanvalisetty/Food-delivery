import { useRouteError } from "react-router"
import { assets } from "../assets/assets"

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="flex flex-col items-center justify-center w-[100vw]"> 
            <img className="h-96" src={assets.Error_img}/>
            <p>{err.status} - {err.statusText}</p>
        </div>
    )
}

export default Error