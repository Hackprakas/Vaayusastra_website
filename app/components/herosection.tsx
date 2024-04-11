import React from 'react'
import image2 from "../../public/download.png"
import Image from 'next/image'

function Herosection() {
  return (
    <div className='flex w-full h-[90vh]'>
      <div className='flex-1 flex flex-col  justify-center items-center -mt-10'>
        <div className='flex  w-full max-w-6xl  justify-between'>
          <div className='flex flex-col justify-center'>
            <div className='flex font-extrabold text-7xl'>We Trigger the </div>
            <div className='font-extrabold text-6xl text-primary'> Creative spark</div>
          </div>
          <div>
            <Image src={image2} alt='rocket' height={400} width={400} className='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection