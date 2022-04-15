import React,{useState,useEffect} from 'react'
import { NavcontextProvider } from '../nav/nav-context'
import Navmenu from '../nav/nav-menu'
import Sidenav from '../nav/side-nav'

const Doc = () => {
 
  return (
    <>
    <NavcontextProvider>
    <Navmenu/>
    <Sidenav/>
    
    
    </NavcontextProvider>
    </>
  )
}

export default Doc