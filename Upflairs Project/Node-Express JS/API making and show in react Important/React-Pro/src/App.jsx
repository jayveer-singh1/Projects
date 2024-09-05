import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ backgroundColor: '#987070', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 30px', margin: '0px 0px 30px' }}>
          <div style={{}}>
           <h1> Admin Pannel </h1>
          </div>
          <div>
            <Link to="/" style={{border: '2px solid black', padding: '5px 10px', margin: '5px', backgroundColor: '#C39898', borderRadius: '20px', textDecoration: 'none' }}>All Products</Link>

            <Link to="single-product" style={{border: '2px solid black', padding: '5px 10px', margin: '5px', backgroundColor: '#C39898', borderRadius: '20px', textDecoration: 'none' }}>Single Product</Link>

            <Link to="add-product" style={{border: '2px solid black', padding: '5px 10px', margin: '5px', backgroundColor: '#C39898', borderRadius: '20px', textDecoration: 'none' }}>Add Product</Link>

            <Link to="update-product" style={{border: '2px solid black', padding: '5px 10px', margin: '5px', backgroundColor: '#C39898', borderRadius: '20px', textDecoration: 'none' }}>Update Product</Link>

            <Link to="delete-product" style={{border: '2px solid black', padding: '5px 10px', margin: '5px', backgroundColor: '#C39898', borderRadius: '20px', textDecoration: 'none' }}>Delete Product</Link>
          </div>

        </nav>

        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/update-product" element={<UpdateProduct />} />
          <Route path="/delete-product" element={<DeleteProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
