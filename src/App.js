import React, { Component } from "react";

import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Input from "./containers/Input/Input";
import Slideshow from './components/Slideshow/Slideshow'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slideshow/>
        <Header />
        <Input />
        <Footer />
      </div>
    );
  }
}

export default App;
