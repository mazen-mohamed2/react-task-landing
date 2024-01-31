import React from 'react'
import Heading from '../../components/ui/Heading'
import ProductCard from '../../components/ProductCard'
import Container from '../../components/ui/Container'

const ProductRecommendation = () => {
    const productData=[
        {title:`Modena Juice & Vege
        Blender Silver`,price:15000, oldPrice:20000,wait:false},
        {title:`Leica M3 with APO-
        Summicron 50mm 1:2`,price:15000, oldPrice:20000,wait:false},
        {title:`Asus Zenbook Pro 13”
        UX-430 US 2018`,price:15000, oldPrice:20000,wait:false},
        {title:`Apple Watch 4 2020`,price:15000, oldPrice:20000,wait:true},
        {title:`Asus Zenbook Pro 13”
        UX-430 US 2018`,price:15000, oldPrice:20000,wait:false},
        {title:`Modena Juice & Vege
        Blender Silver`,price:15000, oldPrice:20000,wait:false},
        {title:`Leica M3 with APO-
        Summicron 50mm 1:2`,price:15000, oldPrice:20000,wait:false},
        {title:`iPad Pro 2018 with
        256GB - Black`,price:15000, oldPrice:20000,wait:false},
    ]
  return (
    <div>
    <Heading title={'Product Recommendation'} desc={'You can choose what our recommendation product here'} />
     <Container className='bg-white  py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-10'>
      {productData.map((item,idx)=>(
      <ProductCard key={idx} items={item}/>
      ))}

      
     </Container>
    </div>
  )
}

export default ProductRecommendation