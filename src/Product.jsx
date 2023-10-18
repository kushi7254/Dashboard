import React from 'react'
import {BsSearch} from "react-icons/bs"
import {MdKeyboardArrowDown} from "react-icons/md"

function Product() {
  return (
    <div className="product">
        
     <div className="productsell">
        <div className="pleft">Product Sell</div>
        <div className="pright">
            <div className="p1"><BsSearch/><input type="search"placeholder='search' /></div>
            <div className="p2">last 30days <MdKeyboardArrowDown/></div>
        </div>
     </div>
     <div className="productname">
        <div className="s1">Product name</div>
        <div className="s2">
            <div className="stock">Stock</div>
            <div className="price">Price</div>
            <div className="">TotalSale</div>
            </div>
     </div>
    </div>
  )
}

export default Product

