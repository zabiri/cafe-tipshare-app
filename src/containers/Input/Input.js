import React, { Component } from "react";
import Day from '../../components/Day/Day'

import "./Input.css";

export class Input extends Component {
  state = {
    checkedRadio: "option1"
  };
  onTabChange = event => {
    this.setState({
      checkedRadio: event.target.value
    });
  };
  render() {
    let content = null;
    switch (this.state.checkedRadio) {
      case "option1":
        content = <Day day="MTW"/>;
        break;
      case "option2":
        content = <Day day="Thursday" />;
        break;
      case "option3":
        content = <Day day="Friday" />;
        break;
      case "option4":
        content = <Day day="Weekend" />;
        break;
        default: return null
    }
    return (
      <div className="Input">
        <div className="Input__tabs">
          <input
          className="Input__tabs-radio"
            value="option1"
            type="radio"
            name="tabs"
            id="toggle-tab1"
            checked={this.state.checkedRadio === "option1"}
            onChange={this.onTabChange}
          />
          <label className="Input__tabs-label" for="toggle-tab1">MTW</label>

          <input
          className="Input__tabs-radio"
            value="option2"
            type="radio"
            name="tabs"
            id="toggle-tab2"
            checked={this.state.checkedRadio === "option2"}
            onChange={this.onTabChange}
          />
          <label className="Input__tabs-label" for="toggle-tab2">Thurs</label>

          <input
          className="Input__tabs-radio"
            value="option3"
            type="radio"
            name="tabs"
            id="toggle-tab3"
            checked={this.state.checkedRadio === "option3"}
            onChange={this.onTabChange}
          />
          <label className="Input__tabs-label" for="toggle-tab3">Fri</label>

          <input
          className="Input__tabs-radio"
            value="option4"
            type="radio"
            name="tabs"
            id="toggle-tab4"
            checked={this.state.checkedRadio === "option4"}
            onChange={this.onTabChange}
          />
          <label className="Input__tabs-label" for="toggle-tab4">Sat-Sun</label>
        </div>
        <div className="Input__panels">{content}</div>
      </div>
    );
  }
}

export default Input;
