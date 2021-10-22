import React from 'react';
import  Card from "./Cards/Card";
import {Switch,Route} from "react-router-dom";
import GetData from './Pages/Products';
import AllProduct from './Pages/AllProduct';
import Details from './Pages/Details';
import ProductCategories from './Pages/ProductCategories';
import ProductLimit from './Pages/ProductLimit';
import CartData from './Pages/CartData';
import AddProduct from './Pages/AddProduct';


function App() {
  return (
    <>
    <div >
   {/*new branch Added to afour_assignment_2 */}
      <Switch>
        <Route exact path="/" component={Card}/>
        <Route path="/get" component={GetData}/>
        <Route path="/getAllData" component={AllProduct}/>
        <Route path="/one" component={Details} />
        <Route path="/getCategories" component={ProductCategories}/>
        <Route path="/cart" component={CartData}/>
        <Route path="/limit" component={ProductLimit}/>
        <Route path="/post" component={AddProduct}/>
      </Switch>
      
    </div>
    
    </>
  );
}

export default App;
