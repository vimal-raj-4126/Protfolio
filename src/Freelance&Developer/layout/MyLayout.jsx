import React from 'react'
// import NavSection from '../component/NavSection'
import {Outlet} from 'react-router-dom'
import Footer from '../component/Footer'

const MyLayout = () => {
  return (
    <div>
        {/* <NavSection /> */}
        <Outlet />
        <Footer />
    </div>
  )
}

export default MyLayout