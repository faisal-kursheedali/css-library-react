import React,{createContext, useContext,useState} from 'react'
import Install from '../doc/inistall';

const NavContext=createContext()
const NavcontextProvider = ({children}) => {
    const[select,setSelect]=useState(<Install/>);
  return (
    <NavContext.Provider value={{select,setSelect}}>
        {children}
    </NavContext.Provider>
  )
}
const Usenavcontext=()=>useContext(NavContext);
export {NavcontextProvider,Usenavcontext};