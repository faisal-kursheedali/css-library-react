import React from 'react'
import {AiOutlineTwitter,AiFillLinkedin,AiOutlineGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-header">
            Thank You
        </div>
        <ul className="footer-list">
            <li className="footer-list-item"><a href="https://twitter.com/faisal_devop/" ><AiOutlineTwitter className='link-icn'/></a></li>
            <li className="footer-list-item"><a href="https://github.com/faisal-kursheedali" ><AiOutlineGithub className='link-icn'/></a></li>
            <li className="footer-list-item"><a href="https://www.linkedin.com/in/faisal-k-4a02801b2/" ><AiFillLinkedin className='link-icn'/></a></li>
        </ul>
        <div className="footer-sub-txt">This component is made with ❤️ @Neog boot camp.</div>
    </footer>
  )
}

export default Footer