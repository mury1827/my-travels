import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Travels from "./travels";

function App() {
  return (
    <div className="App">
      <Travels
        destination="Barcelona"
        country="Spain"
        photo="https://images.unsplash.com/photo-1528744598421-b7b93e12df15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2736&q=80"
        distance="100miles"
      />
      <h1></h1>
      <Travels
        destination="Borabora"
        country="Thailand"
        photo="https://images.unsplash.com/photo-1521071602315-337812740adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        distance="200miles"
      />
    </div>
  );
}

export default App;
