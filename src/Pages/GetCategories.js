import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";

const GetCategories = () => {
  const url3 = "https://fakestoreapi.com/products/category/jewelery";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      try {
        const fetch = await axios.get(url3);
        setCategories(fetch.data);
        console.log(fetch.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
  }, []);
  return (
    <>
      <h1>all categories</h1>
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
            {categories.map((v, index) => {
              return (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.price}</td>
                  <td>{v.description}</td>
                  <td>{v.category}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default GetCategories;
