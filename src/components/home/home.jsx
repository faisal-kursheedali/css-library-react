import React from 'react'
import image from '../../images/home-header-img.png'
import{AiOutlineArrowRight} from 'react-icons/ai';
import {Link} from  "react-router-dom"
// import "./home.css"

// import "/";
const Home = () => {
  return (
    <div className="container">
        <div className="header">
            
              <img src={image} alt="header image" className="header-img"/>
            
            <div className="header-text">
                Build <span className="cta1">UI</span>
                <div className="header-sub-txt">This is to build Your website faster and Easier</div>
                <Link to="/doc" className='link-nostyle'><button className="btn-fancy align-center align-icn">Document  <AiOutlineArrowRight/></button>
                </Link>

            </div>
        </div>
        <div className="txt-box">
        <div className="head3">Documentation </div>
        <div className="p2">The Build UI has good documentation, You can read the documentation and implemant in your website easily.</div>
        </div>
        <Link to="/doc" className='link-nostyle'><button className="btn-fancy">Document</button>
        </Link>
    </div>
  )
}

export default Home