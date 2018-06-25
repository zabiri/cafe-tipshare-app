import React, { Component } from "react";

import Header from "./components/Header/Header";
import Input from "./containers/Input/Input";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Input />
      </div>
    );
  }
}

export default App;
