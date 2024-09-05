import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [productData, setProductData] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setProductData(event.target.value);
        setMessage(''); // Clear previous message when input changes
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const product = JSON.parse(productData);
            const response = await axios.post('http://localhost:3000/product', product);
            if (response.status === 200) {
                setMessage('Product added successfully');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            setMessage('Failed to add product. Please check your input.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                   <b> Product Data (JSON format):</b>
                </label>
                <br />
                <br />
                <textarea
                    value={productData}
                    onChange={handleChange}
                    rows="10"
                    cols="50"
                />
                <button type="submit" style={{border: '2px solid black', padding: '5px 10px', margin: '5px', backgroundColor: '#C39898', borderRadius: '20px', textDecoration: 'none' }}>Add Product</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddProduct;
