import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyLayout from '../layout/MyLayout'
import Home from '../pages/Home'
import MyProvider from '../context/MyContext'
import GalleryAllImage from '../component/GalleryAllImage'

const Photographers = () => {
  return (
    <div>
      <MyProvider>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MyLayout />}>
            <Route path='/' element={<Home />} />
             <Route path="/portfolio" element={<GalleryAllImage />} />
            {/* <Route path='/project' element={}/> */}
            </Route>
        </Routes>
        </BrowserRouter>
        </MyProvider>
    </div>
  )
}

export default Photographers