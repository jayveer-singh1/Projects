import React, { useState } from 'react';
import axios from 'axios';

function UpdateProduct () {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState('');
  const [message, setMessage] = useState('');

  const handleIdChange = (event) => {
    setProductId(event.target.value);
    setMessage(''); 
  };

  const handleDataChange = (event) => {
    setProductData(event.target.value);
    setMessage(''); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const product = JSON.parse(productData);
      const response = await axios.put(`http://localhost:3000/product/${productId}`, product);
      if (response.status === 200) {
        setMessage('Product updated successfully!');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      setMessage('Failed to update product. Please check your input.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="number"
            value={productId}
            onChange={handleIdChange}
          />
        </label>
        <br />
        <label>
          Product Data (JSON format):
          <textarea
            value={productData}
            onChange={handleDataChange}
            rows="10"
            cols="50"
          />
        </label>
        <br />
        <button type="submit" style={{border: '2px solid black', padding: '5px 10px', margin: '5px', backgroundColor: '#C39898', borderRadius: '20px', textDecoration: 'none' }}>Update Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateProduct;
