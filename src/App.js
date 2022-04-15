import React from "react";
import './css/import.css'
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home, Nav,Doc,Footer} from "./import";
function App() {
  return (
    <>
      
    <Router>
      <Nav/>
      <Switch>
      <Route path="/" exact><Home/></Route>
      <Route path="/doc"><Doc/></Route>
      </Switch>
      <Footer/>
    </Router>  
    </>
  );
}

export default App;
