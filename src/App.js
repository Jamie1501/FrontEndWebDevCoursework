import React from "react";
import Search from "./components/Search"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "./data/data";

function App() {
  return (
    <div className="background">
    <div className="container">
      <h1 className="centered">Front End Web Application Development Coursework 1</h1>
      <hr/>
      <br/>
      <Search details={items} />
    </div>
    </div>
  );
}

export default App;
