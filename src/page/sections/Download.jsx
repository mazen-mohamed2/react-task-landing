import React from 'react'
import Container from '../../components/ui/Container'
import Button from '../../components/ui/Button'

const Download = () => {
  return (
    <Container className={'bg-[#FAAD13] flex flex-col-reverse sm:flex-row justify-center sm:justify-between lg:justify-around gap-8 lg:gap-0 pt-11 my-14'}>
     <div  className='bg-white h-48 w-full sm:w-1/3 rounded-t-md' />
     <div className='text-center sm:text-start ' >
     <h2 className="text-2xl sm:text-4xl  font-[500]  text-white ">Download Ehya now </h2>
     <h2 className="text-2xl sm:text-4xl  font-[500]  text-white "> and Get Promo Everyday</h2>
     <div className='flex justify-center sm:justify-start gap-4 my-9'>
        <Button className={'bg-redy w-32 h-10'}></Button>
        <Button className={'bg-redy w-32 h-10'}></Button>
       
     </div>

     </div>
    </Container>
  )
}

export default Download