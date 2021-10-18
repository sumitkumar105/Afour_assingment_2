import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";

const AllData = () => {
  const url2 = "https://fakestoreapi.com/products/1";
  const [product1, setProduct1] = useState([]);
//   {
//     id: "",
//     title: "",
//     price: "",
//     description:"",
//     category: "",
//   }
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
  }, []);

  return (
    <>
      <h1>all datad</h1>
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
                  <td>{product1.id}</td>
                  <td>{product1.title}</td>
                  <td>{product1.price}</td>
                  <td>{product1.description}</td>
                  <td>{product1.category}</td>
                </tr>
             }
          </table>
        </div>
      </div>
    </>
  );
};
export default AllData;
