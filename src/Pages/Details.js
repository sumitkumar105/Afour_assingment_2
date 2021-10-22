import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router';

const Details = () => {
  const location = useLocation();
  console.log(location.state.prodid);
  const history = useHistory();
  const url2 = `https://fakestoreapi.com/products/${location.state.prodid}`;
  const [product1, setProduct1] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      try {
        const fetch = await axios.get(url2);
        setProduct1(fetch.data);
        console.log(fetch.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
  }, [url2]);
  
 console.log(location.state.prodid);
  return (
    <>
     
      <button onClick={() => history.push("/get")}>back</button>
      <h1>One Data</h1>
      <div className="main_data">
        <div className="section_1">
          <table style={{ border: "1px solid black" }}>
            <tr>
              <th>Details of Product</th>
              
            </tr>
            {
              <tr>
                 <td>
                      <div className="main_product">
                        <div className="card_main">
                          <div className="photose">
                            <img
                              className="images_product"
                              src={product1.image}
                              alt="product"
                            />
                          </div>
                          <div>
                            <p>
                              <span className="product_heading">ID: </span>
                              {product1.id}
                            </p>
                            <p>
                              <span className="product_heading">Price: </span>
                              {product1.price}
                            </p>
                            <p>
                              <span className="product_heading">
                                description:{" "}
                              </span>
                              {product1.description}
                            </p>
                            <p>
                              <span className="product_heading">
                                category:{" "}
                              </span>
                              {product1.category}
                            </p>
                            {/* <p>
                              <span className="product_heading">
                                Ratings:{" "}
                              </span>
                              {product1.rating.rate}
                            </p> */}
                            
              
                           
                          </div>
                        </div>
                      </div>
                    </td>
              </tr>
            }
          </table>
        </div>
      </div>
    </>
  );
};
export default Details;
