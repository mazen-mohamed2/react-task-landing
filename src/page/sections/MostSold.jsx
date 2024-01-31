import RedBox from "../../components/ui/RedBox";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Container from "../../components/ui/Container";
import { formatNumber } from "../../lib/util";
const MostSold = () => {
  const data = [
    {
      head: "Most Sold Laptop",
      list: [
        { name: "Asus Zenbook Pro 13”", price: 21000, rate: 4.8, location: "Unit sold" },
        { name: "Asus Zenbook Pro 13”", price: 21000, rate: 4.8, location: "Unit sold" },
        { name: "Asus Zenbook Pro 13”", price: 21000, rate: 4.8, location: "Unit sold" },
        { name: "Asus Zenbook Pro 13”", price: 21000, rate: 4.8, location: "Unit sold" },
       
      ],
    },
    {
      head: "Most Sold Camera",
      list: [
        { name: "Leica M3 1972", price: 15000, rate: 4.8, location: "Unit sold" },
        { name: "Leica M3 1972", price: 15000, rate: 4.8, location: "Unit sold" },
        { name: "Leica M3 1972", price: 15000, rate: 4.8, location: "Unit sold" },
        { name: "Leica M3 1972", price: 15000, rate: 4.8, location: "Unit sold" },
       
      ],
    },
    {
      head: "Most Sold Headphone",
      list: [
        { name: "Beats by Dre C", price: 899, rate: 4.8, location: "Unit sold" },
        { name: "Beats by Dre C", price: 899, rate: 4.8, location: "Unit sold" },
        { name: "Beats by Dre C", price: 899, rate: 4.8, location: "Unit sold" },
        { name: "Beats by Dre C", price: 899, rate: 4.8, location: "Unit sold" },
      
      ],
    },
  ];
  return (
    <Container className="flex flex-row  gap-11 pb-11 overflow-x-auto">
      {data.map((e,idx)=>(
      <div key={idx}>
        <h2 className="my-10 font-[500] text-blue-h text-xl pt-10">
         {e.head}
        </h2>
        <section className="flex flex-col gap-y-4">
        {e.list.map((e,idx)=>(
          <div key={idx} className="flex flex-col sm:flex-row items-start w-[19rem] lg:w-full sm:items-center rounded gap-5 bg-[#B3BAC5] bg-opacity-[.1] p-5 ">
            <RedBox className={"w-16 h-16"} />
            <div className="gap-y-2 flex flex-col">
              <p className=" font-[500] text-blue-h text-base ">
                {e.name}
              </p>
              <div className="flex gap-7">
                <p className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span>{e.rate} </span>{" "}
                </p>
                <p className="flex items-center  gap-2 text-gray-600">
                  <FaCartShopping />{" "}
                  <span className="sm:text-[12px] lg:text-[14px] ">{formatNumber(e.price)} {e.location} </span>{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
        </section>
       <p className="text-main-green text-base font-[500] flex justify-between items-center mt-8"> Leaderboard details <IoIosArrowForward  /> </p>
      </div>
      ))}
    </Container>
  );
};

export default MostSold;
