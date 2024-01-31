
import React, {  useEffect, useState } from 'react';
import HotItemCard from './HotItemCard';
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";

const data = [
  { id: 1, name: 'Asus Zenbook Pro 13', price: 15000, description: 'The specification here' },
  { id: 2, name: 'Modena Juice Blender', price: 15000, description: 'The specification here' },
  { id: 3, name: 'Leica M3 1972', price: 15000, description: 'The specification here' },
  { id: 4, name: 'iPad Pro 2018', price: 15000, description: 'The specification here' },
  { id: 5, name: 'iPad Pro 2019', price: 15000, description: 'The specification here' },
  { id: 6, name: 'iPad Pro 2020', price: 15000, description: 'The specification here' },
];

const CustomeCarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  useEffect(() => {
    const updateItemsPerView = () => {
     
      if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();

    window.addEventListener('resize', updateItemsPerView);

    return () => {
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, [])
  const goNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = data.length - itemsPerView;
      return prevIndex < maxIndex ? prevIndex + 1 : maxIndex;
    });
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const isSmallDevice = window.innerWidth <= 480;
  if (data.length === 0) {
    return null;
  }


  return (
    <div className="flex items-center relative justify-center">
      {currentIndex > 0 && (
        <button onClick={goPrev} className="bg-white absolute top-2 sm:relative hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full z-10 mr-[-13px] w-14 h-14 flex justify-center items-center mb-2 shadow-xl">
          <IoIosArrowBack />
        </button>
      )}

      <div className="">
        <div
          className="flex transition-transform flex-col sm:flex-row py-2"
          style={{
            transform: isSmallDevice
            ? `translateY(-${currentIndex * (10 / itemsPerView)}%)`
      : `translateX(-${currentIndex * (10 / itemsPerView)}%)`,
          }}
        >
          
          {data
          .slice(currentIndex, Math.min(currentIndex + itemsPerView, data.length))
          .map((item) => (
            <HotItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {currentIndex < data.length - itemsPerView && (
        <button onClick={goNext} className="bg-white absolute bottom-[-3rem] sm:bottom-0  sm:relative hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full z-10 ml-[-13px] w-14 h-14 flex justify-center items-center mb-2 shadow-xl">
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};


export default CustomeCarousel;
