import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header"
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Cart from "./src/pages/Cart";
import Error from "./src/pages/Error"
import RestaurantMenu from "./src/pages/RestaurantMenu"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ScrollToTop from "./src/components/ScrollToTop";
import UserContext from "./src/utils/userContext";
const Grocery = lazy(()=>import("./src/pages/Grocery"));
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const AppLayout = () => {
    const [userInfo, setUserInfo] = useState([])

    useEffect(()=>{
        setUserInfo("Kalyan")
    },[])

    return(
       <Provider store={appStore}>
       <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
       <Header/>
       <Outlet/>
       <ScrollToTop/>
       </UserContext.Provider>
       </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<div>Loading</div>}>
                    <Grocery/>
                </Suspense>
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)