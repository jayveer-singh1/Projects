import React from "react"
import Product from "./Product"
import { ProductData } from "./ProductData"

function Products() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#D8EFD3' }}>
            
            <Product title={ProductData[0].title} description={ProductData[1].description} category={ProductData[1].category} price={ProductData[1].price} discountPercentage={ProductData[1].discountPercentage} rating={ProductData[1].rating} stock={ProductData[1].stock} images={ProductData[1].images} />

            <Product {...ProductData[2]} />
            <Product {...ProductData[3]} />
            <Product {...ProductData[4]} />
            <Product {...ProductData[5]} />
            <Product {...ProductData[6]} />
            <Product {...ProductData[7]} />
            <Product {...ProductData[8]} />
            <Product {...ProductData[9]} />
            <Product {...ProductData[10]} />
            <Product {...ProductData[11]} />
            <Product {...ProductData[12]} />
            <Product {...ProductData[13]} />
            <Product {...ProductData[14]} />
            <Product {...ProductData[15]} />
            <Product {...ProductData[16]} />
            <Product {...ProductData[17]} />
            <Product {...ProductData[18]} />
            <Product {...ProductData[19]} />
            <Product {...ProductData[20]} />
        </div>
    )
}
export default Products