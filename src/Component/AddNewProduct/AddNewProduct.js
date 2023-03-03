import React from "react";

const AddNewProduct = () => {
  return (
    <div class="formContainer">
      <h4 class="formTitle">Add New Product</h4>
      <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm">
        {/* <!-- product name --> */}
        <div class="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            class="addProductInput"
            id="lws-inputName"
            type="text"
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div class="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            class="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div class="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            class="addProductInput"
            id="lws-inputImage"
            type="text"
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div class="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div class="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              class="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div class="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              class="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" class="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
