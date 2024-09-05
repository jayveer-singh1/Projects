import React, { useEffect, useState } from 'react';

function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);



    return (
        <div>
            <h1>All Product</h1>
            {products.length === 0 ? (
                <p>Data is Loading...</p>
            ) : (
                <ul style={{ listStyle: 'none' }}>
                    {products.map((product) => (
                        <li key={product.id} style={{ border: '2px solid black', padding: '20px', margin: '10px', backgroundColor: '#DBB5B5' }}>
                            <h2>{product.title}</h2>
                            <p>Id: {product.id}</p>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>Discount: {product.discountPercentage}%</p>
                            <p>Rating: {product.rating}</p>
                            <p>Stock: {product.stock}</p>
                            <p>Brand: {product.brand}</p>
                            <p>SKU: {product.sku}</p>
                            <p>Weight: {product.weight}g</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllProducts