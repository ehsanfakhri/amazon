"use client";

import SearchIcon from "./icons/SearchIcon";
import ShopingCartIcon from "./icons/ShopingCart";
import MenuIcon from "./icons/MenuIcon";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectItems } from "../app/redux/features/basket/basketSlice.js";

function Header({ session }) {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/*Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className=" flex items-center mt-4 mx-2 flex-grow sm:flex-grow-0">
          <img
            className="cursor-pointer"
            onClick={() => router.push("/")}
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width="140"
            height="40"
            alt=""
          />
        </div>

        {/* Search */}
        <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />

          <SearchIcon />
        </div>

        {/* Right */}
        <div className=" text-white text-xs flex items-center space-x-6 mx-6  whitespace-nowrap   ">
          <div
            onClick={
              !session
                ? () =>
                    signIn("google", { callbackUrl: "http://localhost:3000" })
                : signOut
            }
            className="link"
          >
            <p>{session ? `Hello ${session.user.name}` : "Sing in"}</p>
            <p className=" font-extrabold md:text-sm ">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className=" font-extrabold md:text-sm">& Orders</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className=" relative link  flex items-center"
          >
            <span className=" absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold ">
              {items.length}
            </span>
            <ShopingCartIcon />
            <p className=" hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Buttom nav */}
      <div className="flex  items-center text-xs bg-amazon_blue-light space-x-3 text-white p-2 pl-4  ">
        <div className="flex items-center link">
          <MenuIcon />
          <p>All</p>
        </div>

        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden  lg:inline-flex">Electronics</p>
        <p className="link hidden  lg:inline-flex">Food & Grocery</p>
        <p className="link hidden  lg:inline-flex">Prime</p>
        <p className="link hidden  lg:inline-flex">Buy Again</p>
      </div>
    </header>
  );
}

export default Header;
