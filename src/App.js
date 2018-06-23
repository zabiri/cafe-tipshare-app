import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Layout from "./containers/Layout/Layout";

import reducer from "./store/reducer";
import "./App.css";

class App extends Component {
  render() {
    const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return (
      <div className="App">
        <Provider store={store}>
          <Layout />
        </Provider>
      </div>
    );
  }
}

export default App;
