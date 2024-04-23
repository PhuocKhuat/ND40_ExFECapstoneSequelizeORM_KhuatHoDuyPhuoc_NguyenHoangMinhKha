import React from 'react'
import SearchImage from './SearchImage/SearchImage'
import ImageList from './ImageList/ImageList'
import '../../common/styleCommon.css'

export default function HomePage() {
  return (
    <div className='homePage mt-10'>
      <div className='container'>
        <SearchImage/>
        <ImageList/>
      </div>
    </div>
  )
}
