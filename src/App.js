import React from 'react';
import  Card from "./Cards/Card";
import {Switch,Route} from "react-router-dom";
import PostData from './Pages/PostData';
import GetData from './Pages/GetData';

function App() {
  return (
    <div >
      {/* <h1>hello sumitkumar Sanjay Deshpande</h1>
      <Card/> */}
      <Switch>
        <Route exact path="/" component={Card}/>
        <Route path="/post" component={PostData}/>
        <Route path="/get" component={GetData}/>
      </Switch>
      
    </div>
  );
}

export default App;
