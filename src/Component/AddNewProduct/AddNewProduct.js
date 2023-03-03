// import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addedProduct } from "../../Redux/AddedProduct/ActionsCreator";

const AddNewProduct = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const productNmae = e.target.productName.value;
    const category = e.target.category.value;
    const imageUrl = e.target.imageUrl.value;
    const Price = e.target.Price.value;
    const quantity = e.target.quantity.value;
    const products = {
      productNmae,
      category,
      imageUrl,
      Price,
      quantity,
    };
    console.log(products);
    dispatch(addedProduct(products));
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            name="productName"
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            name="category"
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            name="imageUrl"
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              name="Price"
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              name="quantity"
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
