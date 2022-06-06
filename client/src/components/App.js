import React from "react";
import data from "../lib/data"
import Products from "./Products";

const App = () => {
  return (
    <div id="app">
      {/* <Header /> */} 
      <Products items={data} />
    </div>
  );
};

export default App;
