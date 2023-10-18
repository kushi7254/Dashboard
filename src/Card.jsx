import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
function Card(props) {
  return (
    <div>
      <div className='card'>
                <div className='card-inner'>
                   <img src={props.image} style={{width:"50px",height:"50px", borderRadius:"50%" }}  alt="" />
                   
                
                </div>
                <p style={{fontSize:"10px"}}>{props.title} <br/><span style={{fontSize:"20px"}}>{props.amount}</span> <br /><div style={{display:"flex",color:"light-green"}}> <span style={{fontWeight:"bold"}}>{props.icon}</span> <span style={{color:"green",fontWeight:"bold"}}>{props.percent}</span> <span style={{color:"red",fontWeight:"bold"}}>{props.percent1}</span><span style={{color:'black'}}>this month</span></div></p>
            </div>
    </div>
  )
}

export default Card
