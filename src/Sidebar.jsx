import React from 'react'
import {RiSettingsLine} from "react-icons/ri";
import {TbSquareKey,TbCoins,TbHelpSquare} from "react-icons/tb"
import {BsBox,BsPerson,BsWallet} from "react-icons/bs";
import {LuBadgePercent} from "react-icons/lu"
import {MdKeyboardArrowRight,MdKeyboardArrowDown} from "react-icons/md"
import Mahdev from "./assets/img.png"
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <RiSettingsLine  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                   <div className=""> <TbSquareKey className='icon'/> Dashboard</div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <div className="c1"><BsBox className='icon'/> Products</div>  <div className=""><MdKeyboardArrowRight/></div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div className="c1"><BsPerson className='icon'/> Customers</div>  <div className=""><MdKeyboardArrowRight/></div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div className="c1"><BsWallet className='icon'/> income</div>  <div className=""><MdKeyboardArrowRight/></div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div className="c1"><LuBadgePercent  className='icon'/> Promote</div>  <div className=""><MdKeyboardArrowRight/></div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <div className="c1" ><TbHelpSquare className='icon'/>Help</div>  <div className=""><MdKeyboardArrowRight/></div>
                </a>
            </li>
           
        </ul>
        <div className="sidebar-footer">
        
           <div className="" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>

        <img src={Mahdev} style={{width:"25px",height:"25px", marginLeft:"10px", borderRadius:"50%",border:"solid 2px white"}} alt="" /> 
        <div className=""><p style={{display:"flex",flexDirection:"column"}}><span style={{color:"white", fontSize:"10px"}}>Mahadev</span><span style={{fontSize:"7px"}}>Electrical</span></p></div>
           </div>
            

        <div className=""><MdKeyboardArrowDown/></div>
        </div>
    </aside>
  )
}

export default Sidebar