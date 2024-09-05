import React from "react"

function Product(props) {
    let { title, description, category, price, discountPercentage, rating, stock, images } = props
    return (
        <div style={{ border: '2px solid black', margin: '25px', width: '400px', height: '510px', padding: '20px', backgroundColor:'#55AD9B  ', borderRadius:'30px'}}>
            <p><b>Title :- </b>{title}</p>
            <img src={images} alt="Product" style={{ width: '200px', height: '200px' }} />
            <p><b>Description :- </b>{description}</p>
            <p><b>Category :- </b>{category}</p>
            <p><b>Price :- </b>{price}</p>
            <p><b>DiscountPercentage :- </b>{discountPercentage}</p>
            <p><b>Stock :- </b>{stock}</p>
            <p><b>Rating :- </b>{rating}</p>
        </div>
    )
}
export default Product