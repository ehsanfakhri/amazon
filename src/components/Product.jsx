"use client";

import Image from "next/image";
import StarIcon from "./icons/StarIcon";
import CurrencyFormat from "react-currency-format";

function Product({ id, title, price, description, category, image }) {
  const hasPrime = true;

  return (
    <section className=" relative flex flex-col items-stretch m-5 bg-white z-30 p-10 ">
      <p className=" absolute top-2 right-2 text-xs italic  text-gray-400">
        {category}
      </p>

      <div className="flex self-center">
        <Image
          src={image}
          height={200}
          width={200}
          style={{ objectFit: "contain" }}
        />
      </div>

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        <StarIcon />
      </div>

      <p className=" text-xs my-2 line-clamp-2">{description}</p>

      <div className=" mb-8">
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 ">
          <img
            className="w-12"
            src="https://www.thekandyking.co.uk/wp-content/uploads/2022/11/prime-hydration-logo.png"
            alt=""
          />
          <p className=" text-xs test-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto buttom">Add to Basket</button>
    </section>
  );
}

export default Product;
