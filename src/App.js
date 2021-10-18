import React from 'react';
import  Card from "./Cards/Card";
import {Switch,Route} from "react-router-dom";
import GetData from './Pages/GetData';

function App() {
  return (
    <div >
   
      <Switch>
        <Route exact path="/" component={Card}/>
        <Route path="/get" component={GetData}/>
      </Switch>
      
    </div>
  );
}

export default App;
