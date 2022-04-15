import React from 'react'
import Showcode from './showcode'


const Avatar
 = () => {
  
  return (
    <>
    
<div className="txt-box">
  <div className="head1">Avatar </div>
  <div className="p1">Avatar can be used to show user's profile picture on profile information page, on navigation
    bar, in blogs grid items.</div>
  <div className="head3">Example of Image Avatar</div>
  <div className="p2">Avatar is available in 5 different sizes. You can use image in Avatar. You need to include class
    avatar(avatar-rnd/avatar-sqr/avatar-txt) and for size add class according to size avatar-xl, avatar-lrg,
    avatar-md, avatar-sm, avatar-xsm (e.g. class="avatar-rnd avatar-lrg").
  </div>
  <div className="head3">Rounded avatar</div>
  <div className="gray-bg ">
    <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt='' className="avatar-rnd avatar-xl" />
    <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt='' className="avatar-rnd avatar-lrg" />
    <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt='' className="avatar-rnd avatar-md" />
    <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt='' className="avatar-rnd avatar-sm" />
    <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt='' className="avatar-rnd avatar-xsm" />
  </div>
  <div className="head3">how to use it</div>
  <div className="p2">It is very easy to use, You just need to add
    <span className="txt-code">class="avatar-rnd"</span> on your img
    <span className="txt-code">tag</span>.
  </div>
  
    <Showcode code={`<img src="../../images/img1.jpg" alt="" class="avatar-rnd avatar-xl">
     <img src="../../images/img1.jpg" alt="" class="avatar-rnd avatar-lrg">
     <img src="../../images/img1.jpg" alt="" class="avatar-rnd avatar-md">
     <img src="../../images/img1.jpg" alt="" class="avatar-rnd avatar-sm">
     <img src="../../images/img1.jpg" alt="" class="avatar-rnd avatar-xsm">`}/>
   
  
  <hr />
  <div className="head3">Square avatar</div>
  <div className="gray-bg">
    <img src="https://wallpaperaccess.com/full/2213424.jpg" alt='' className="avatar-sqr avatar-xl" />
    <img src="https://wallpaperaccess.com/full/2213424.jpg" alt='' className="avatar-sqr avatar-lrg" />
    <img src="https://wallpaperaccess.com/full/2213424.jpg" alt='' className="avatar-sqr avatar-md" />
    <img src="https://wallpaperaccess.com/full/2213424.jpg" alt='' className="avatar-sqr avatar-sm" />
    <img src="https://wallpaperaccess.com/full/2213424.jpg" alt='' className="avatar-sqr avatar-xsm" />
  </div>
  <div className="head3">how to use it</div>
  <div className="p2">It is very easy to use, You just need to add
    <span className="txt-code">class="avatar-sqr"</span> on your img
    <span className="txt-code">tag</span>.
  </div>
   
  <Showcode code={`<img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-xl">
        <img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-lrg">
        <img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-md">
        <img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-sm">
        <img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-xsm">`}/>
  <hr />
  <div className="head3">Text avatar</div>
  <div className="gray-bg">
    <div className="avatar-txt avatar-xl">faisal</div>
    <div className="avatar-txt avatar-lrg">faisal</div>
    <div className="avatar-txt avatar-md">faisal</div>
    <div className="avatar-txt avatar-sm">faisal</div>
    <div className="avatar-txt avatar-xsm">faisal</div>
  </div>
  <div className="head3">how to use it</div>
  <div className="p2">It is very easy to use, You just need to add
    <span className="txt-code">class="avatar-txt"</span> on your img
    <span className="txt-code">tag</span>.
  </div>
  <Showcode code={`<div class="avatar-txt avatar-xl">faisal</div>
            <div class="avatar-txt avatar-lrg">faisal</div>
            <div class="avatar-txt avatar-md">faisal</div>
            <div class="avatar-txt avatar-sm">faisal</div>
            <div class="avatar-txt avatar-xsm">faisal</div>`}/>
  <hr />
  <div className="head3">Avatar sizing</div>
  <div className="p2">All the avatar types fallow the same sizing method.It is very easy to change the size of the
    avatar, You just need to add this class name after the avatar-type.
    <ul>
      <li>
        <span className="txt-code">class="avatar-xsm"</span> for <span className="highlighted">extra-small</span>
        size.
      </li>
      <li>
        <span className="txt-code">class="avatar-sm"</span> for <span className="highlighted">small</span> size.
      </li>
      <li>
        <span className="txt-code">class="avatar-md"</span> for <span className="highlighted">medium</span> size.
      </li>
      <li>
        <span className="txt-code">class="avatar-lrg"</span> for <span className="highlighted">large</span> size.
      </li>
      <li>
        <span className="txt-code">class="avatar-xl xsm"</span> for <span className="highlighted">extra-large</span>
        size.
      </li>
    </ul>
  </div>
  <div className="p2 cta1">this is the small example to write avatar-size :</div>
  
  <Showcode code={`<img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-xl"/>
<img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-lrg"/>
<img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-md"/>
<img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-sm"/>
<img src="../../images/img2.jpg" alt="" class="avatar-sqr avatar-xsm"/>`}/>




</div>

</>
  )
}

export default Avatar
