import React from 'react'
import { NavLink } from 'react-router-dom'
import PageBannerPlusText from '../../components/PageBannerPlusText'
import Footer from "../../components/Footer"
const AthleteImages = () => {
  return (
    <div>
        <PageBannerPlusText
           img=
           'contact_1.jpg'
           bg='bg-black/30 backdrop-blur-3xl'
      bannerHeight='h-500'

      text={
      <div className='flex flex-col items-center'>
        <div className="">
            <div className=" mt-0 mb-5 text-3xl"> 
            <NavLink to='/gallery' className='hover:bg-white hover:border-2 px-2 py-1 rounded-4xl hover:scale-110 transition-all duration-150'>
            &#8592;
            </NavLink>
            </div>
          </div>
        <h1 className='font-extrabold text-5xl my-3'>
          ATHLETE - OUR FOUNDATION SWIMMERS
        </h1>
        <p className='font-light text-2xl my-2'>
        Guiding young swimmers from their first splash to confident strokes.
        </p>
        <div className="grid grid-cols-4 space-x-3 space-y-3">
        {/* <details>
          <summary>Click to view full image</summary>
          <img src="/stroke.avif" style={{width:"100%"}}/>
        </details> */}
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          <img src="/stroke.avif" alt="" className='h-60 '/>
          
        </div>
        <NavLink className={`bg-[#041E42] px-14 py-2 text-lg font-bold text-white rounded-md transform transform-all duration-150 hover:scale-110`} to='/gallery'>Back to gallery</NavLink>
      </div>
      }/> 
      
      <Footer/>
    </div>
  )
}

export default AthleteImages