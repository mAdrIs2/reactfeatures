import React from 'react'
import Navbr from "./Navbr"
import Content from "./Content"
import Footer from "./Footer"

const BSGrid = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="row row-col-auto justify-content-center">
        <div className="col-12 p-2 mb-3 bg-dark">
          <Navbr />
        </div>
        <Content />
        <div className="col-12 position:fixed bottom-0 text-center bg-dark text-white p-4 mt-5">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BSGrid