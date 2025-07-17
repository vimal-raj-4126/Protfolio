import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyLayout from '../layout/MyLayout'
import Home from '../pages/Home'
import MyProvider from '../context/MyContext'

const FresherAndStudent = () => {
  return (
    <div>
      <MyProvider>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MyLayout />}>
            <Route path='/' element={<Home />} />
            {/* <Route path='/project' element={}/> */}
            </Route>
        </Routes>
        </BrowserRouter>
        </MyProvider>
    </div>
  )
}

export default FresherAndStudent