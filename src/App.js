import React, { Component } from "react";

import Header from "./components/Header/Header";
import Input from "./containers/Input/Input";
import Footer from './components/Footer/Footer'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <Footer />
      </div>
    );
  }
}

export default App;
