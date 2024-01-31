import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'

const Header = () => {
  return (
    <header className='bg-[#B3BAC5] bg-opacity-[.1] px-5 md:px-32 py-14'>
        <Navbar/>
        <Banner/>
    </header>
  )
}

export default Header