import PageBannerPlusText from '../../components/PageBannerPlusText'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from "../../components/Footer"

export default function FoundationImages(){
  return (
    <div>
      <PageBannerPlusText
      img='contact.jpg'
      bg='bg-black/30 backdrop-blur-3xl'
      text={
        <div className='flex flex-col items-center w-full'>

        <h1 className='font-extrabold text-4xl my-2'>
        STARTING BLOCK - OUR FOUNDATION SWIMMERS
      </h1>
      <p className='font-light text-2xl '>
        Guiding young swimmers from their first splash to confident strokes.
        </p>
        </div>
      }
      />
      <PageBannerPlusText
         img=
         'contact_1.jpg'
         bg='bg-black/30 backdrop-blur-3xl'
      bannerHeight='h-475'
      text={
      <div className='flex flex-col items-center'>
        
                <div className="flex w-full">
            <div className=" mt-0 mb-5 text-3xl"> 
            <NavLink to='/gallery' className= ' hover:bg-white font-extrabold hover:text-black hover:border-2 px-2 py-1 rounded-4xl hover:scale-110 transition-all duration-150'>
            &#8592;
            </NavLink>
            </div>
          </div>
    

        <div className="grid grid-cols-4 space-x-3 space-y-3 bg-gray-100 border-2 border-black/10 shadow-2xl  py-20 px-20 rounded-3xl">
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
        <NavLink className={`bg-[#041E42] px-14 py-2 text-2xl font-bold text-white rounded-md transform transform-all duration-150 hover:scale-110 my-10`} to='/gallery'>Back to gallery</NavLink>
      </div>
      }/> 
      <Footer/>

    </div>
  )
}
