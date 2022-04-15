import React from 'react'
// import "../css/import.css";
// import "./nav.css";
// import{Link} from 'react-router-dom'
import { FiTool} from 'react-icons/fi'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
        <div className="nav">
           <div className="nav-logo">
               <FiTool className='nav-logo-icn'/>
               build UI</div>
            <ul className="nav-list">
                <Link className='nav-link' to="/"><li className="nav-item">Home</li></Link>
                <Link className='nav-link' to="/doc"><li className="nav-item">Document</li></Link>
                
                {/* <li className="nav-item"></li> */}
            </ul>
        </div>
    </>
  )
}

export default Nav
