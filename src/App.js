import React from 'react';
import  Card from "./Cards/Card";
import {Switch,Route} from "react-router-dom";
import GetData from './Pages/GetData';
import AllData from './Pages/AllData';
import GetOneData from './Pages/GetOneData';
import GetCategories from './Pages/GetCategories';
import Categories from './Pages/Categories';
import CartData from './Pages/CartData';
import PostData from './Pages/PostData';

function App() {
  return (
    <div >
   {/*new branch Added to afour_assignment_2 */}
      <Switch>
        <Route exact path="/" component={Card}/>
        <Route path="/get" component={GetData}/>
        <Route path="/getAllData" component={AllData}/>
        <Route path="/getOneData" component={GetOneData}/>
        <Route path="/getCategories" component={GetCategories}/>
        <Route path="/cart" component={CartData}/>
        <Route path="/allCategories" component={Categories}/>
        <Route path="/post" component={PostData}/>
      </Switch>
      
    </div>
  );
}

export default App;
