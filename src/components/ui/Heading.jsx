import React from 'react'

const Heading = ({title, desc}) => {
  return (
    <div className='my-10 flex justify-center gap-y-4 flex-col items-center'>
    <h1 className='font-[600] text-3xl text-blue-h'>{title}</h1>
    <p className='text-blue-h text-center'>{desc} </p>
    </div>
  )
}

export default Heading