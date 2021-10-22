import React, { useState, useEffect } from "react";
import "../Pages/PostData.css";
import axios from "axios";
import "../Cards/Structure.css";
// import "../Pages/ProductCard.css";
import { useHistory } from "react-router";
// data,newData
const AddProduct = () => {
  const history = useHistory();
  const [post, setPost] = useState();
  const [prod, setProd] = useState([]);
  const [val, setVal] = useState({
    id: 0,
    title: "",
    price: "",
    description: "",
    image: "",
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
      image: val.image,
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
          val.category === "##") &&
        (val.image === "@" ||
          val.image === "&" ||
          val.image === "#" ||
          val.image === "&&" ||
          val.image === "||" ||
          val.image === "$" ||
          val.image === "$$" ||
          val.image === "@@" ||
          val.image === "##")
      ) {
        alert("enter valid data!!!");
        setVal({ title: "", price: "", category: "", image: "" });
      } else {
        console.log(post);
        setVal({ post });
        console.log(val);
        axios.post(url4, postData).then((res) => setPost(res.data));
        setVal({ title: "", price: "", category: "",image:"" });
      }
    }
  }
  // console.log("Parent to child", post);

  return (
    <div>
      <button onClick={() => history.push("/get")}>back</button>
      <h1>posting data page</h1>
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
              placeholder="enter image url"
              value={val.image}
              onChange={(e) => setVal({ ...val, image: e.target.value })}
            />
          </div>
          <div className="section_input">
            <input
              type="text"
              placeholder="enter price"
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
          <div className="main_product">
          <div className="card_main_1">
            <div className="photose">
              <img
                className="images_product"
                src={post.image}
                alt="product"
              />
            </div>
            <div>
              <p>{post.title}</p>
              <p>{post.price}</p>
              <p>{post.description}</p>
              <p>{post.category}</p>
            </div>
          </div>
        </div>
        ) : (
          console.log("erro")
        )}
      </div>
    </div>
  );
};
export default AddProduct;
