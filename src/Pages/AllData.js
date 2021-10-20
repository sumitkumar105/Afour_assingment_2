import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";
// import "../Pages/ProductCard.css";
import { Route, Link, useHistory } from "react-router-dom";
import GetOneData from "../Pages/GetOneData";
const AllData = () => {
  const history = useHistory();
  const url1 = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [Open, setOpen] = useState(false);
  const [del, setDel] = useState([]);
  const [opendel, setOpenDel] = useState(false);
  // const [id, setId] = useState(0);
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
  function SelectData(id) {
    // alert(`update: ${id}`);
    console.log(product[id - 1]);
    const item = product[id - 1];

    const newData = {
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
    };
    // console.log("updated dat",newData);
    setUpdatedData(newData);
    // setProduct(newData)
    console.log("updated Data total", newData);
    setOpen(true);
  }
  function DeleteData(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => setDel(json));
    setOpenDel(true);
  }
  console.log(del);

  async function UpdateData() {
    //  .then((response) => console.log(response.data));

    try {
      const Updated_val = {
        title: updatedData.title,
        price: updatedData.price,
        description: updatedData.description,
        category: updatedData.category,
      };
      console.log("in udate function", Updated_val);
      const fetch = await axios.put(url1, Updated_val);

      setUpdatedData(fetch.data);
    } catch (err) {
      console.log(err);
    }

    console.log(updatedData);
    // setProduct(response.data))
  }
  

 

  const goToReceiver = (id) => {
    
    history.push("/getOneData",{prodid:id});
  }

  return (
    <>
      <Route path="/getOneData" component={GetOneData} />

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
      {Open && updatedData ? (
        <div className="main_data">
          <div className="section_1">
            <table style={{ border: "1px solid black" }}>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>Price</th>
                <th>description</th>
                <th>category</th>
              </tr>
              {
                <tr>
                  <td>{updatedData.id}</td>
                  <td>{updatedData.title}</td>
                  <td>{updatedData.price}</td>
                  <td>{updatedData.description}</td>
                  <td>{updatedData.category}</td>
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
                <th>id</th>
                <th>title</th>
                <th>Price</th>
                <th>description</th>
                <th>category</th>
              </tr>
              {
                <tr>
                  <td>{del.id}</td>
                  <td>{del.title}</td>
                  <td>{del.price}</td>
                  <td>{del.description}</td>
                  <td>{del.category}</td>
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
                              <span className="product_heading">
                                Ratings:{" "}
                              </span>
                              {v.rating.rate}
                            </p>
                            
                              <button onClick={()=>goToReceiver(v.id)}>details</button>
                           
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
