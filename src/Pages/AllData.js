import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/getData.css";

const AllData = () => {
  const url1 = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [Open, setOpen] = useState(false);
  const [del, setDel] = useState([]);
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
  function OpenUpadateForm() {
    setOpen(true);
  }

  return (
    <>
      <h1>
        all datad<button onClick={OpenUpadateForm}>update</button>
      </h1>
      {Open ? (
        <div className="main_section">
          <div className="section1">
            <p className="heading">
              input form <button onClick={() => setOpen(false)}>X</button>
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

      <div className="main_data">
        <div className="section_1">
          <table style={{ border: "1px solid black" }}>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>Price</th>
              <th>description</th>
              <th>category</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            {Object.values(product).map((v, index) => {
              return (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.price}</td>
                  <td>{v.description}</td>
                  <td>{v.category}</td>
                  <td>
                    <button onClick={() => SelectData(v.id)}>update</button>
                  </td>
                  <td>
                    <button onClick={() => DeleteData(v.id)}>delete</button>
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