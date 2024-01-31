import React from "react";
import RedBox from "./ui/RedBox";
import Currency from "./ui/Currency";
import Button from "./ui/Button";
import { FaHeart } from "react-icons/fa";
const ProductCard = ({ items }) => {
  return (
    <>
      {items.wait ? (
        <>
          <div className="relative bg-[#E95432] p-5  rounded-md  flex flex-col items-center justify-around transition duration-300 ease-in-out  ">
            <h2 className="text-center font-[500] text-white text-xl ">
              {items.title}
            </h2>
            <div className="flex gap-1 justify-between items-center mt-3">
              <span className="bg-white rounded bg-opacity-10 text-white  px-2">
                10
              </span>
              <span className="text-white">: </span>

              <span className="bg-white rounded bg-opacity-10 text-white  px-2">
                10
              </span>
              <span className="text-white">: </span>

              <span className="bg-white rounded bg-opacity-10 text-white  px-2">
                10
              </span>
            </div>
            <RedBox className={"w-[120px] h-[120px] bg-white my-12"} />

            <Button
              className={
                "w-full bg-white  font-[600]  text-[#E95432] transition duration-300 ease-in-out "
              }
            >
              Buy Now <Currency value={items.price} />
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="relative px-20 md:px-5  bg-white hover:bg-green-100 p-5 rounded-md  flex flex-col items-center justify-around  transition duration-300 ease-in-out  ">
            <div className="absolute cursor-pointer top-4 right-4 bg-white rounded-full p-2">
              <FaHeart className="text-gray-500 hover:text-gray-700" />
            </div>
            <RedBox className={"w-[120px] h-[120px] "} />
            <h2 className="text-center font-[700] text-blue-h text-lg pt-10">
            {items.title}
            </h2>
            <div className="flex gap-4 my-6">
              <Currency value={items.price} />
              <Currency
                value={items.oldPrice}
                className={"line-through text-[#959EAD] "}
              />
            </div>
            <Button
              className={
                "bg-transparent w-full text-main-green hover:bg-main-green hover:text-white transition duration-300 ease-in-out "
              }
            >
              Buy Now
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
