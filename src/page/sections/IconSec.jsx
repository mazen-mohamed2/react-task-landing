import React from 'react'
import fashion from '../../utils/images/fashion.png'
import handphone from '../../utils/images/iconspace_android phone.png'
import Laptop from '../../utils/images/iconspace_Notebook.png'
import Music from '../../utils/images/iconspace_Not C.png'
import Photography from '../../utils/images/iconspace_Camera.png'
import Furniture from '../../utils/images/iconspace_Chair.png'
import Health from '../../utils/images/iconspace_Stethoscope B.png'
import Sports from '../../utils/images/iconspace_Soccer Ball.png'
import Games from '../../utils/images/iconspace_Controller 2.png'
import Investment from '../../utils/images/iconspace_Gold Bar.png'
import Ticket from '../../utils/images/iconspace_Ticket.png'
import More  from '../../utils/images/iconspace_Apps (1).png'
const IconSec = () => {
    const data =[
        {image:fashion, title: 'fashion'},
        {image:handphone, title: 'Handphone'},
        {image:Laptop, title: 'Laptop'},
        {image:Music, title: 'Music'},
        {image:Photography, title: 'Photography'},
        {image:Furniture, title: 'Furniture'},
        {image:Health, title: 'Health'},
        {image:Sports, title: 'Sports'},
        {image:Games, title: 'Games'},
        {image:Investment, title: 'Investment'},
        {image:Ticket, title: 'Ticket'},
        {image:More, title: 'More Category'},
       
    ]
  return (
    <section className='px-5 md:px-32  mt-[45rem] sm:mt-72  grid grid-cols-2 gap-y-8 md:grid-cols-6 sm:grid-cols-4 place-items-center my-11'>
        {data.map((e,idx)=>(
        <div key={idx} className='text-center shadow-lg w-40 border border-gray-200 rounded-md p-8 gap-y-3 flex flex-col items-center '>
           <img src={e.image} alt={e.title} className='w-[42px] h-[42px]' />
           <p className='text-blue-h capitalize text-sm' >{e.title}</p>
        </div>
        ))}
      
 
    </section>
  )
}

export default IconSec