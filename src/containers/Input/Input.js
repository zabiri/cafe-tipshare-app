import React, { Component } from "react";
import AnimateOnChange from "../../components/AnimateOnChange/AnimateOnChange";

import Day from "../../components/Day/Day";

import "./Input.css";

export class Input extends Component {
  state = {
    checkedRadio: "MTW",
    previous: null
  };
  onTabChange = event => {
    this.setState({
      checkedRadio: event.target.value,
      previous: this.state.checkedRadio
    });
  };

  render() {
    return (
      <main className="Input">
        <div className="Input__tabs">
          <input
            checked={this.state.checkedRadio === "MTW"}
            className="Input__tabs-radio"
            id="toggle-tab1"
            name="tabs"
            onChange={this.onTabChange}
            type="radio"
            value="MTW"
          />
          <label className="Input__tabs-label" htmlFor="toggle-tab1">
            MTW
          </label>

          <input
            checked={this.state.checkedRadio === "Thursday"}
            className="Input__tabs-radio"
            id="toggle-tab2"
            name="tabs"
            onChange={this.onTabChange}
            type="radio"
            value="Thursday"
          />
          <label className="Input__tabs-label" htmlFor="toggle-tab2">
            Thurs
          </label>

          <input
            checked={this.state.checkedRadio === "Friday"}
            className="Input__tabs-radio"
            id="toggle-tab3"
            name="tabs"
            onChange={this.onTabChange}
            type="radio"
            value="Friday"
          />
          <label className="Input__tabs-label" htmlFor="toggle-tab3">
            Fri
          </label>

          <input
            checked={this.state.checkedRadio === "Weekend"}
            className="Input__tabs-radio"
            id="toggle-tab4"
            name="tabs"
            onChange={this.onTabChange}
            type="radio"
            value="Weekend"
          />
          <label className="Input__tabs-label" htmlFor="toggle-tab4">
            Sat-Sun
          </label>
        </div>
        <div className="Input__panels">
          <AnimateOnChange
            animate={this.state.checkedRadio.diff !== 0}
            animationClassName="fade-in"
            baseClassName="Poop"
          >
            <Day day={this.state.checkedRadio} key={this.state.checkedRadio} />
          </AnimateOnChange>
        </div>
      </main>
    );
  }
}

export default Input;
