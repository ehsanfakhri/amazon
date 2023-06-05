import Image from "next/image";
import SearchIcon from "./icons/SearchIcon";
import ShopingCartIcon from "./icons/ShopingCart";
import MenuIcon from "./icons/MenuIcon";
function Header() {
  return (
    <header>
      {/*Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className=" flex items-center mt-4 mx-2 flex-grow sm:flex-grow-0">
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={140}
            height={40}
            style={{objectFit: "contain"}}
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
          <div className="link">
            <p>Hello Mr_Fakhri</p>
            <p className=" font-extrabold md:text-sm ">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className=" font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className=" relative link  flex items-center">
            <span className=" absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold ">
              4
            </span>
            <ShopingCartIcon />
            <p className=" hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Buttom nav */}
      <div className="flex  items-center bg-amazon_blue-light space-x-3 text-white p-2 pl-6  ">
        <div className="flex items-center">
        <MenuIcon />
        <p >
           All
        </p>
        </div>
      
        
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
