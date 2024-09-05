import React, { useState } from 'react';
import axios from 'axios';

function SingleProduct() {
    const [number, setNumber] = useState('');
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/product/${number}`);
            if (response.data.status === 'success') {
                setProducts(Array.isArray(response.data.data) ? response.data.data : [response.data.data]);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchProducts();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <b>ID :</b>
                </label>
                <input
                    type="number"
                    value={number}
                    onChange={handleChange}
                    min="1"
                />
                <button type="submit" style={{border: '2px solid black', padding: '5px 10px', margin: '5px', backgroundColor: '#C39898', borderRadius: '20px', textDecoration: 'none' }}>Fetch Product</button>
            </form>
            <div>
                <ul style={{ listStyle: 'none' }}>
                    {products.map((product) => (
                        <li key={product.id} style={{ border: '2px solid black', padding: '20px', margin: '10px', backgroundColor: '#DBB5B5' }}>
                            <h3>{product.title}</h3>
                            <p><b>ID:</b> {product.id}</p>
                            <p>{product.description}</p>
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                            <p><strong>Rating:</strong> {product.rating}</p>
                            <p><strong>Stock:</strong> {product.stock}</p>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>SKU:</strong> {product.sku}</p>
                            <p><strong>Weight:</strong> {product.weight}g</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SingleProduct
