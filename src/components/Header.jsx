import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [token, setToken] = useState(true);
  const [visible, setVisible] = useState(false);
  let onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)

  //Subscribing to the Store
  const cart = useSelector((store)=>store.cart.items)

  return (
    <div className="flex items-center justify-between bg-white text-sm px-6 py-2 md:px-20 mb-5 border-b border-gray-400 sticky top-0 z-10">
      <div className="flex gap-8 items-center">
      <Link to="/">
      <div className="w-24 cursor-pointer">
        <img src={assets.logo} width="100%" alt="logo" />
      </div>
      </Link>
      <div>
        <span className="font-semibold">Welcome</span>
        <p>{loggedInUser}</p>
      </div>
      </div>


      <ul className="hidden md:flex items-start gap-8 font-normal text-lg text-slate-500">
        <Link to="/">
          <li>
            <i className="bi bi-house-fill mr-2"></i> HOME
          </li>
          <hr className="border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden" />
        </Link>
        <Link to="/about">
          <li>
            <i className="bi bi-file-person mr-2"></i>ABOUT
          </li>
          <hr className="border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden" />
        </Link>
        <Link to="/grocery">
          <li>
            <i className="bi bi-telephone-fill mr-2"></i>Grocery
          </li>
          <hr className="border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden" />
        </Link>
        <Link to="/cart" className="relative">
          <li>
            <i className="bi bi-bag-fill mr-2"></i>CART
          </li>
          <p className="absolute right-[-15px] top-[-8px] w-7 text-center bg-red-600 text-white aspect-square rounded-full text-[14px]">
            {cart.length}
          </p>
          <hr className="border-none outline-none h-0.5 bg-black w-3/5 m-auto hidden" />
        </Link>
      </ul>

      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative md:hidden">
          <i className="bi bi-bag-fill mr-2 text-2xl"></i>
          <p className="absolute right-[-5px] top-[-5px] w-5 text-center leading-5 bg-primary text-white aspect-square rounded-full text-[12px]">
          {cart.length}
          </p>
        </Link>

        <p>{onlineStatus? '🟢 online' : '🔴 offline'}</p>
        {token ? (
          <div>
            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className="w-5 cursor-pointer md:hidden"
            />
            <button
              onClick={() => setToken(false)}
              className="bg-black px-4 py-3 text-white rounded-full hidden md:block"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setToken(true)}
            className="bg-primary px-4 py-3 text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>

      {/**Side Bar menu for small screens */}
      <div
        className={`absolute w-full top-0 right-0 bottom-0 h-svh bg-white transition-all ${
          visible ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col text-gray-600 bg-white">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p className="text-gray-400">BACK</p>
          </div>
          <Link
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border"
            to="/"
          >
            <p>HOME</p>
          </Link>
          <Link
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border"
            to="/about"
          >
            <p>ABOUT</p>
          </Link>
          <Link
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border"
            to="/contact"
          >
            <p>CONTACT</p>
          </Link>
          <Link
            onClick={() => setVisible(false)}
            className="py-3 pl-6 border"
            to="/cart"
          >
            <p>CART</p>
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
              setToken(false);
            }}
            className="py-3 pl-6 border"
            to="/"
          >
            <p>LOGOUT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
