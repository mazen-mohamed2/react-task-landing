import Button from "./ui/Button"
import Currency from "./ui/Currency"
import RedBox from "./ui/RedBox"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


const Banner = () => {
    const data = [
        "Newest OS Support",
        "Water and Dust Resistant",
        "Long lasting battery life",
        "Get a 20% Cashback right now",
    ]
    const cards=[
        {title:`Beats by Dre C 3450. Active Noise Cancelling`,price:1750},
        {title:`Samsung Galaxy Watch 3.Black Metalic Newest`,price:1750},
        {title:`Apple Watch 4 2020.Silver - Special Edition`,price:1750},
        {title:`Apple Watch 4 2020.Silver - Special Edition`,price:1750},
        {title:`Apple Watch 4 2020.Silver - Special Edition`,price:1750},
        {title:`Apple Watch 4 2020.Silver - Special Edition`,price:1750},
        {title:`Apple Watch 4 2020.Silver - Special Edition`,price:1750},
        {title:`Apple Watch 4 2020.Silver - Special Edition`,price:1750},
    ]


    
    return (
        <>
        <section className="flex flex-col sm:flex-row items-start justify-center sm:justify-between my-14">
            <div className=" flex flex-col  items-center sm:justify-start sm:items-start w-full sm:w-1/2">
                <div className="bg-redy w-[118px] h-[17px]  " />
                <h1 className="text-blue-h  text-4xl sm:text-5xl text-center md:text-start font-[600] py-10">Get Special Watch with Special Prices</h1>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 ">
                    {data.map((e, idx) => (
                        <li key={idx} className="list-disc marker:text-[#FAAD13] text-[#5A7184] ">
                            {e}</li>
                    ))}
                </ul>
                <div className="flex flex-col my-10 sm:flex-row justify-between rounded w-full lg:w-10/12 sm:w-[24rem] bg-white p-2">
                <input placeholder="Insert your email" className="w-60 outline-0" />
                <Button className={'sm:w-[167px] w-full mt-4 sm:mt-0'}>
                    Join Pre-Order
                </Button>
                </div>



            </div>


            {/* ---------------- */}
            <img className="w-[24.5625rem] h-[26.3125rem]" src={require("../utils/images/Image.png")} alt="" />

        </section>
        <Swiper className="mySwiper"  
         spaceBetween={20}
         slidesPerView={1}
         pagination={{ clickable: true }}
         breakpoints={{
           320: { // Mobile devices
             slidesPerView: 1,
             spaceBetween: 20,
           },
           640: { // Tablets
             slidesPerView: 2,
             spaceBetween: 20,
           },
           768: { // Larger tablets
             slidesPerView: 2,
             spaceBetween: 20,
           },
           1024: { // Desktop
             slidesPerView: 3,
             spaceBetween: 20,
           }
         }}
        >

        <section className="flex justify-center gap-7 ">
       
        {cards.map((e,idx)=>(
             <SwiperSlide key={idx}>
            <div className="card">
            <div  className="flex w-full gap-6   bg-white p-2 rounded  transition duration-300 ease-in-out ">
            <RedBox className={'w-[80px] h-[80px] basis-1/4'} />
            <div  className=" basis-[57%] w-full text-blue-h text-[16px]">
            <p className="mb-2">{e.title} </p>
            <Currency value={e.price} /> 
            </div>
            </div>
             <div className="bg-white h-1 mt-3 bullet" >
             </div>
            </div>
            </SwiperSlide>
        ))}
           
            </section>
           
        </Swiper>
        </>
    )
}

export default Banner