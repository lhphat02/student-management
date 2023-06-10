import React from 'react'
import assets from '../assets';
import Image from 'next/image';
import { Carousel } from 'flowbite-react'

const MyCarousel = () => {
    return(
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
        <Image
              src={assets.Carousel1}
              alt="..."
            />
         <Image
              src={assets.Carousel2}
              alt="..."
            />
         <Image
              src={assets.Carousel3}
              alt="..."
            />
         <Image
              src={assets.Carousel4}
              alt="..."
            />
         <Image
              src={assets.Carousel5}
              alt="..."
            />      
        </Carousel>
      </div>  
    )
}

export default MyCarousel