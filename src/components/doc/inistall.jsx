import React from 'react'
import image from '../../images/install.png'
const Install = () => {
  return (
    <>
   
      <img src={image} alt="" className="header-img" />
      <div className="txt-box">
        <div className="head2 bold">
          Installation
        </div>
        <div className="p2">
          It is easy to install the component library in to your project. You just need 
          to import this link from your css file.

        </div>

        <div className="p1 txt-code">Coming soon...</div>
      </div>
    </>
  )
}

export default Install