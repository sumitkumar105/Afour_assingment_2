import React from "react";
import "../Cards/Structure.css";
const Structure = () => {
  return (
    <>
      <div className="main_product">
        <div className="card_main">
          <div className="photose">
            <img
              className="images_product"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="product"
            />
          </div>
          <div>
            <h1>Title</h1>
            <p>Price</p>
            <p>Description</p>
            <p>Category</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Structure;
