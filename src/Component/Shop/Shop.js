import React from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import Product from "../Products/Product";
import Navbar from "../Shared/Navbar";
import "./output.css";

const Shop = () => {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <Navbar></Navbar>
      {/* <!-- Navbar ends --> */}
      <main className="py-16">
        <div className="productWrapper">
          {/* <!-- products container --> */}
          <div className="productContainer" id="lws-productContainer">
            {/* <!-- product item --> */}
            <Product></Product>
            {/* <!-- product item ends --> */}
          </div>
          {/* <!-- products container ends --> */}
          <div>
            {/* <!-- Product Input Form --> */}
            <AddNewProduct></AddNewProduct>
            {/* <!-- Product Input Form Ends --> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
