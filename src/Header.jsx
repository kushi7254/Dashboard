import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
           Hello Mahadev
        </div>
        <div className='header-right'>
             <BsSearch  className='icon'/>
           <input type="search" placeholder='search' />
            
        </div>
    </header>
  )
}

export default Header