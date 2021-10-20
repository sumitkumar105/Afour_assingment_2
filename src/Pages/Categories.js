import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";
import { useHistory } from "react-router";
const Categories = () => {
  const history = useHistory();
  const url3 = "https://fakestoreapi.com/products/categories";
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
      <button onClick={() => history.push("/get")}>back</button>
      <h1>Only categories</h1>
      <div className="main_data">
        <div className="section_1">
          <table style={{ border: "1px solid black" }}>
            <tr>
              <th>Categories</th>
            </tr>
            {categories.map((v, index) => {
              return (
                <tr key={v.id}>
                  <td>{v}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default Categories;
