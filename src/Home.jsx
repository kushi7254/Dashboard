import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { PieChart, Pie, Sector,  } from 'recharts';
import Card from './Card';
import Earning from "./assets/Earning.png";
import Sale from "./assets/sale.png";
import Balance from "./assets/Balance.png"
import {BsArrowDown,BsArrowUp} from "react-icons/bs";
import order from "./assets/order.png"
import Pichart from "./Pichart"
import Product from './Product';
import ProductList from './assets/ProductList';
function Home() {

      

    const data = [
        {
          name: 'jan',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'July',
          uv: 3490,
          pv: 4300,
          amt: 2100,
         
        },
        {
          name: 'Aug',
          uv: 3490,
          pv: 4300,
          amt: 2100,
          opacity:1,
        },
        {
          name: 'sep',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Oct',
          uv: 3490,
          pv: 4300,
          amt: 2100,
          
        },
        {
          name: 'Nov',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Dec',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },

 
      ];
    
    

  return (
    <main className='main-container'>
       

        <div className='main-cards'>
        <Card image={Earning} title="Earnings" amount="$198k" icon={<BsArrowUp style={{color:"green",fontWeight:"bold"}}/>} percent="37.8%"/>
        <Card  image={order} title="Orders" amount="$2.4k" icon={<BsArrowDown style={{color:"red",fontWeight:"bold"}}/>} percent1="2%"/>
        <Card  image={Balance} title="Balance" amount="$2.4k" icon={<BsArrowDown style={{color:"red",fontWeight:"bold"}} />} percent1="2%"/>
        <Card  image={Sale} title="Sales" amount="$89k" icon={<BsArrowUp style={{color:"green",fontWeight:"bold"}}/>} percent="11%"/>
        </div>
        
        <div className='charts'>
            
          <div className="barchart">

        <ResponsiveContainer width="100%" height="100%" >
        <BarChart width={150} height={40} data={data} >
          <Bar dataKey="uv" fill="#8884d8" radius={10}  opacity={0.3} />
          <XAxis dataKey="name" />
        </BarChart>
      </ResponsiveContainer>
          </div>

           <div className="pichart">

         <Pichart/>
           </div>

            </div>
        <div className="productsection">

       <Product/>
       <div className="productline">

       <ProductList/>
       </div>
        </div>
        
       
    </main>
  )
}

export default Home