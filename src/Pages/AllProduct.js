import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";

import { useHistory } from "react-router-dom";

const AllData = () => {
  const history = useHistory();
  const url1 = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [Open, setOpen] = useState(false);
  const [del, setDel] = useState([]);
  const [checkStatus, setCheckStatus] = useState(false);
  const [opendel, setOpenDel] = useState(false);
  console.log(updatedData);

  useEffect(() => {
    async function fetchingData() {
      try {
        const fetch = await axios.get(url1);
        setProduct(fetch.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
  }, []);
  async function SelectData(id) {
   
    console.log(product[id - 1]);
    const item = product[id - 1];

    const newData = {
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
    };
    // console.log("updated dat",newData);

    try {
      
      console.log("in udate function", newData);
      const fetch = await axios.put(url1, newData);

      setUpdatedData(fetch.data);
    } catch (err) {
      console.log(err);
    }
    setUpdatedData(newData);
    // setProduct(newData)
    console.log("updated Data total", newData);
    setOpen(true);
  }
  async function DeleteData(id) {
    
    try {
      const resp = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );
      setDel(resp.data);
      setOpenDel(true);
    } catch (err) {
      console.error(err);
    }
  }
  console.log(del);

  // async function UpdateData() {
  //   //  .then((response) => console.log(response.data));

  //   try {
  //     const Updated_val = {
  //       title: updatedData.title,
  //       price: updatedData.price,
  //       description: updatedData.description,
  //       category: updatedData.category,
  //     };
  //     console.log("in udate function", Updated_val);
  //     const fetch = await axios.put(url1, Updated_val);

  //     setUpdatedData(fetch.data);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   console.log(updatedData);
  //   // setProduct(response.data))
  // }
  function UpdateData() {
    setCheckStatus(true);
  }
  const goToReceiver = (id) => {
    history.push("/one", { prodid: id });

    console.log(id);
  };

  return (
    <>
      <button onClick={() => history.push("/get")}>back</button>

      <h1>Product Data</h1>
      {Open ? (
        <div className="main_section">
          <div className="section1">
            <p className="heading">
              input form<button onClick={() => setOpen(false)}>X</button>
            </p>
            <div className="section_input">
              <input
                type="text"
                placeholder="enter title"
                value={updatedData.title}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, title: e.target.value })
                }
              />
            </div>
            <div className="section_input">
              <input
                type="text"
                placeholder="enter price"
                value={updatedData.price}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, price: e.target.value })
                }
              />
            </div>
            <div className="section_input">
              <input
                type="text"
                placeholder="enter Category"
                value={updatedData.category}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, category: e.target.value })
                }
              />
            </div>
            <div className="section_btn">
              <button onClick={UpdateData} className="submit_btn">
                Update
              </button>
            </div>
          </div>
        </div>
      ) : (
        console.log("error to open update form")
      )}
      {Open && checkStatus ? (
        <div className="main_data">
          <div className="section_1">
            <table style={{ border: "1px solid black" }}>
              <tr>
                <th>id</th>
                {/* <th>title</th>
                <th>Price</th>
                <th>description</th>
                <th>category</th> */}
              </tr>
              {
                <tr>
                  <td>
                    <div className="main_product">
                      <div className="card_main">
                        <div className="photose">
                          <img
                            className="images_product"
                            src={updatedData.image}
                            alt="product"
                          />
                        </div>
                        <div>
                          <p>
                            <span className="product_heading">ID: </span>
                            {updatedData.id}
                          </p>
                          <p>
                            <span className="product_heading">Price: </span>
                            {updatedData.price}
                          </p>
                          <p>
                            <span className="product_heading">
                              description:{" "}
                            </span>
                            {updatedData.description}
                          </p>
                          <p>
                            <span className="product_heading">category: </span>
                            {updatedData.category}
                          </p>
                          {/* <p>
                            <span className="product_heading">Ratings: </span>
                            {updatedData.rating.rate}
                          </p> */}

                          {/* <button onClick={() => goToReceiver(v.id)}>
                              details
                            </button> */}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              }
            </table>
          </div>
        </div>
      ) : (
        console.log("error")
      )}
      {opendel && del ? (
        <div className="main_data">
          <div className="section_1">
            <table style={{ border: "1px solid black" }}>
              <tr>
                <th>Deleted Data</th>
              </tr>
              {
                <tr>
                  <td>
                    <div className="main_product">
                      <div className="card_main">
                        <div className="photose">
                          <img
                            className="images_product"
                            src={del.image}
                            alt="product"
                          />
                        </div>
                        <div>
                          <p>
                            <span className="product_heading">ID: </span>
                            {del.id}
                          </p>
                          <p>
                            <span className="product_heading">Price: </span>
                            {del.price}
                          </p>
                          <p>
                            <span className="product_heading">
                              description:{" "}
                            </span>
                            {del.description}
                          </p>
                          <p>
                            <span className="product_heading">category: </span>
                            {del.category}
                          </p>
                          <p>
                            <span className="product_heading">Ratings: </span>
                            {del.rating.rate}
                          </p>

                          {/* <button onClick={() => goToReceiver(v.id)}>
                              details
                            </button> */}
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* <td>{del.title}</td>
                  <td>{del.price}</td>
                  <td>{del.description}</td>
                  <td>{del.category}</td> */}
                </tr>
              }
            </table>
          </div>
        </div>
      ) : (
        console.log("error")
      )}
      {
        <div className="main_data">
          <div className="section_1">
            <table style={{ border: "1px solid black" }}>
              <tr>
                <th>Data</th>

                <th>Update</th>
                <th>Delete</th>
              </tr>
              {Object.values(product).map((v, index) => {
                return (
                  <tr key={v.id}>
                    <td>
                      <div className="main_product">
                        <div className="card_main">
                          <div className="photose">
                            <img
                              className="images_product"
                              src={v.image}
                              alt="product"
                            />
                          </div>
                          <div>
                            <p>
                              <span className="product_heading">ID: </span>
                              {v.id}
                            </p>
                            <p>
                              <span className="product_heading">Price: </span>
                              {v.price}
                            </p>
                            {/* <p>
                              <span className="product_heading">
                                description:{" "}
                              </span>
                              {v.description}
                            </p> */}
                            <p>
                              <span className="product_heading">
                                category:{" "}
                              </span>
                              {v.category}
                            </p>
                            <p>
                              <span className="product_heading">Ratings: </span>
                              {v.rating.rate}
                            </p>

                            <button onClick={() => goToReceiver(v.id)}>
                              details
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <button
                        className="update"
                        onClick={() => SelectData(v.id)}
                      >
                        update
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => DeleteData(v.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      }
    </>
  );
};
export default AllData;
