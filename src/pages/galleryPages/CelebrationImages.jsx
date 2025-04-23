import React from 'react'
import { NavLink } from 'react-router-dom'
import PageBannerPlusText from '../../components/PageBannerPlusText'


const CelebrationImages = () => {
  return (
    <div>
        <PageBannerPlusText
      img=
      'gallery_bg.avif'
      bannerHeight='h-500'
      bg='bg-black/10'
      text={
      <div className='flex flex-col items-center'>
        <h1 className='font-extrabold text-5xl my-3'>
          CELEBRATION- OUR FOUNDATION SWIMMERS
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
        <NavLink className={`bg-yellow-600 px-14 py-2 text-lg font-bold text-white rounded-md transform transform-all duration-150 hover:scale-110`} to='/gallery'>Back to gallery</NavLink>
      </div>
      }/> 
      
      </div>
  )
}

export default CelebrationImages