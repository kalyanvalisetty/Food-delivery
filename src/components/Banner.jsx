import React from "react";
import { assets } from "../assets/assets";

const Banner = () =>{
    return(
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-t from-indigo-200 px-6 md:px-6 lg:px-20 rounded-b-3xl" id="top">
            <div className="md:w-1/2 flex flex-col items-center justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
                 <p className="text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-tight">
                 Order Food<br/><span className="text-green-600">Online</span> in<br/>Hyderabad</p>
                 <img width="20%" src={assets.banner_title_line}/>
            </div>
            <div className="md:w-1/2 relative">
                <img width="w-full absolute bottom-0 h-auto rounded-lg" src={assets.banner_img}/>
            </div>
            <a href="#top" className='bg-red-500 fixed bottom-0 right-0 z-10 m-10 p-5 text-white rounded-full'>TOP</a>
        </div>
    )
}

export default Banner