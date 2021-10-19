import React, { useState, useEffect } from "react";
import "../Pages/PostData.css";
import axios from "axios";
// data,newData
const PostData = ({ data }) => {
  const [post, setPost] = useState();
  const [prod, setProd] = useState([]);
  const [val, setVal] = useState({
    id: 0,
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const url4 = "https://fakestoreapi.com/products";
  useEffect(() => {
    async function fetchingData() {
      try {
        const fetch = await axios.get(url4);
        setProd(fetch.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchingData();
  }, []);
  console.log(prod);
  function handleSubmit(v) {
    v.preventDefault();

    const postData = {
      title: val.title,
      price: val.price,
      description: "everything is good",
      category: val.category,
    };
    if (!val.title && !val.price && !val.category) {
      alert("filled proper Data!!!!");
    } else {
      if (
        (val.title === "@" ||
          val.title === "&" ||
          val.title === "#" ||
          val.title === "&&" ||
          val.title === "||" ||
          val.title === "$" ||
          val.title === "$$" ||
          val.title === "@@" ||
          val.title === "##") &&
        (val.price === "@" ||
          val.price === "&" ||
          val.price === "#" ||
          val.price === "&&" ||
          val.price === "||" ||
          val.price === "$" ||
          val.price === "$$" ||
          val.price === "@@" ||
          val.price === "##") &&
        (val.category === "@" ||
          val.category === "&" ||
          val.category === "#" ||
          val.category === "&&" ||
          val.category === "||" ||
          val.category === "$" ||
          val.category === "$$" ||
          val.category === "@@" ||
          val.category === "##")
      ) {
        alert("enter valid data!!!");
        setVal({ title: "", price: "", category: "" });
      } else {
        console.log(post);
        setVal({ post });
        console.log(val);
        axios.post(url4, postData).then((res) => setPost(res.data));
        setVal({ title: "", price: "", category: "" });
      }
    }
  }
  // console.log("Parent to child", post);

  return (
    <div>
      <h1>
        post data page <button onClick={() => data(false)}>X</button>
      </h1>
      <div className="main_section">
        <div className="section1">
          <p className="heading">input form</p>
          <div className="section_input">
            <input
              type="text"
              placeholder="enter title"
              value={val.title}
              onChange={(e) => setVal({ ...val, title: e.target.value })}
            />
          </div>
          <div className="section_input">
            <input
              type="text"
              placeholder="enter price"
              value={val.price}
              onChange={(e) => setVal({ ...val, price: e.target.value })}
            />
          </div>
          <div className="section_input">
            <input
              type="text"
              placeholder="enter Category"
              value={val.category}
              onChange={(e) => setVal({ ...val, category: e.target.value })}
            />
          </div>
          <div className="section_btn">
            <button onClick={handleSubmit} className="submit_btn">
              ADD
            </button>
          </div>
        </div>
      </div>
      <div>
        {post ? (
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
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.price}</td>
                    <td>{post.description}</td>
                    <td>{post.category}</td>
                  </tr>
                }
              </table>
            </div>
          </div>
        ) : (
          console.log("erro")
        )}
      </div>
    </div>
  );
};
export default PostData;
