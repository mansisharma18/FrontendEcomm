import React from 'react'
import './Product.css'

const Product = ({id,title,image,price,rating}) => {
  return (
    <div className="product">
        <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>Rs</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {
                Array(rating)
                .fill()
                .map((item)=>{
                    <p><a href="https://www.flaticon.com/free-icons/star" title="star icons"></a></p>
                })
            }
        </div>
        </div>

        <img src={image} alt="img"/>
        <button>Add to basket</button>




        
    </div>
  )
}

export default Product