import React from 'react'
import RedBox from './ui/RedBox'
import Currency from './ui/Currency'
import Button from './ui/Button'

const HotItemCard = ({item}) => {
  return (
    <>
    <div className="relative bg-white border-r border-gray-200 hover:bg-green-100 p-16 px-8 pb-6 rounded-md  flex flex-col items-center justify-around  transition duration-300 ease-in-out  ">
            
            <RedBox className={"w-[120px] h-[120px] "} />
            <h2 className="text-center font-[500] text-blue-h text-xl pt-10">
              {item.name}
            </h2>
            <p className="text-center font-[500] text-gray-400 text-sm py-2">
              {item.description}
            </p>
           
            <Button
              className={
                "bg-transparent w-full text-main-green hover:bg-main-green hover:text-white transition duration-300 ease-in-out "
              }
            >
              <Currency value={item.price} />
            </Button>
          </div>
    </>
  )
}

export default HotItemCard