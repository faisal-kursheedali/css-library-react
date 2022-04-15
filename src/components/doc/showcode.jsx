import React from 'react'

const Showcode = ({code}) => {
    const showcode=(code)=>{
        return(code);
    }
  return (
    <xmp className="xmp-box">
        {showcode(code)}
    </xmp>
  )
}

export default Showcode