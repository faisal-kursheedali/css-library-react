import React,{useState} from 'react';
import{Avatar,Install}from  '../doc/import-doc'
import { Usenavcontext } from './nav-context';

const Navmenu= () => {
    const{select,setSelect}=Usenavcontext()
const[menuClick,setMenuClick]=useState(false)
  return (
    <>
        <div className="navmenu-btn"onClick={()=>setMenuClick(!menuClick)}>menu</div>

        {
          menuClick?(<><div className="navmenu">
                <ul className="navmenu-list">
                    <li className="navmenu-item" onClick={()=>{ setMenuClick(!menuClick) }} >Back to doc</li>
                    
                    <li className="navmenu-item" onClick={()=>{setSelect(<Install/>); setMenuClick(!menuClick) }} >Installation</li>
                    <li className="navmenu-item" onClick={()=>{setSelect(<Avatar/>); setMenuClick(!menuClick) }} >Avatar</li>
                    
                    <li className="navmenu-item" onClick={()=>{ setMenuClick(!menuClick) }} >Back to doc</li>
                </ul>
            </div>
            <div className="container-for-navmenu">
            <div className="content-of-navmenu" style={{filter:'blur(3px)'}}>
                {
                  select
                }
          </div>
          </div>
          </>):
            <div className="container-for-navmenu">
          <div className="content-of-navmenu" >{
            select
        }</div></div>
        }
        
        
  
    </>
  )
}

export default Navmenu
