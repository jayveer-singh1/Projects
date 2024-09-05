import React, { useState } from 'react';
import axios from 'axios';

function DeleteProduct () {
  const [productId, setProductId] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/product/${productId}`);
      console.log('Product deleted successfully', response);
      setDeleteMessage('Product deleted successfully');
      // Yahan kuch aur action le sakte hain jaise state update ya success message show karna.
    } catch (error) {
      console.error('Error deleting product:', error);
      setDeleteMessage('Error deleting product');
      // Error handling code
    }
  };

  return (
    <div>
      <input
        type="number"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Enter Product ID"
      />
      <button onClick={handleDelete} style={{border: '2px solid black', padding: '5px 10px', margin: '5px', backgroundColor: '#C39898', borderRadius: '20px', textDecoration: 'none' }}>Delete Product</button>
      {deleteMessage && <p>{deleteMessage}</p>}
    </div>
  );
};

export default DeleteProduct;
