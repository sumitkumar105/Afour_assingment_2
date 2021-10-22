import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";
import { useHistory } from "react-router";

const AllData = () => {
  const history = useHistory();
  const url1 = "https://fakestoreapi.com/products?limit=5";
  const [limit, setLimit] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      try {
        const fetch = await axios.get(url1);
        setLimit(fetch.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
  }, []);
  return (
    <>
      <button onClick={() => history.push("/get")}>back</button>
      <h1>all datad</h1>
      <div className="main_data">
        <div className="section_1">
          <table style={{ border: "1px solid black" }}>
            <tr>
              <th>The Data</th>
            </tr>
            {limit.map((v, index) => {
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
                          <p>
                            <span className="product_heading">
                              description:{" "}
                            </span>
                            {v.description}
                          </p>
                          <p>
                            <span className="product_heading">category: </span>
                            {v.category}
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
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default AllData;
