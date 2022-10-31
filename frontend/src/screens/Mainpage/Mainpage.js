import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidemenu from '../../components/Sidemenu'
const Mainpage = () => {
  return (
    <>
        <div>
            <Header/>
        </div>
        <div>
        <Sidemenu/>
        </div>
        <div>
        <Footer/>
        </div>
    </>
  )
}

export default Mainpage
