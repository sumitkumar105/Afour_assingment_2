import { useHistory } from "react-router-dom";
const GetData = () => {
  const history = useHistory();
  

  // console.log("checking data", product);

  return (
    <>
      <button onClick={() => history.push("/")}>back</button>

      <h1>
        <button className="Add" onClick={() => history.push("/post")}>
          Add Data
        </button>
      </h1>
    
      <div className="collection_btn">
        <div className="main">
          <div className="card">
            <div className="section">
              <h1> Product Data</h1>

              <button
                onClick={() => history.push("/getAllData")}
                className="btn"
              >
                AllData
              </button>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="card">
            <div className="section">
              <h1> OneCategories</h1>

              <button
                onClick={() => history.push("/getCategories")}
                className="btn"
              >
                Categories
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="collection_btn">
        <div className="main">
          <div className="card">
            <div className="section">
              <h1>Fetching Cart Data</h1>

              <button onClick={() => history.push("/cart")} className="btn">
                CartData
              </button>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="card">
            <div className="section">
              <h1> Data</h1>

              <button onClick={() => history.push("/limit")} className="btn">
                ProductLimit
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};
export default GetData;
