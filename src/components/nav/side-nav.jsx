import React from 'react'
import {Install,Avatar} from "../doc/import-doc"
import { Usenavcontext } from './nav-context'

const Sidenav= () => {
  const{select,setSelect}=Usenavcontext()
  return (
    <>
    <div className="container-for-sidenav">
    <div className="sidenav">
       <ul className="sidenav-list">
         <li className="sidenav-item" onClick={()=>setSelect(Install)} style={{borderBlockColor:'var(--cta1)'}}>Installation</li>
         <li className="sidenav-item" onClick={()=>setSelect(<Avatar/>)} style={{borderBlockColor:'var(--cta1)'}}>Avatar</li>
       </ul>

        
      </div>
      <div className="content-of-sidenav">
        {
          select
        }
      </div>
      </div>
    </>
  )
}

export default Sidenav
