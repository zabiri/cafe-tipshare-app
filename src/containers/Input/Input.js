import React, { Component } from "react";
import AnimateOnChange from '../../components/AnimateOnChange/AnimateOnChange'

import Day from '../../components/Day/Day'

import "./Input.css";

export class Input extends Component {
  state = {
    checkedRadio: "MTW",
    previous: null,
  };
  onTabChange = event => {
    this.setState({
      previous: this.state.checkedRadio,
      checkedRadio: event.target.value
    });
  };

  render() {

    return (
      <main className="Input">
        <div className="Input__tabs">
          <input
          className="Input__tabs-radio"
            value="MTW"
            type="radio"
            name="tabs"
            id="toggle-tab1"
            checked={this.state.checkedRadio === "MTW"}
            onChange={this.onTabChange}
          />
          <label className="Input__tabs-label" htmlFor="toggle-tab1">MTW</label>

          <input
          className="Input__tabs-radio"
            value="Thursday"
            type="radio"
            name="tabs"
            id="toggle-tab2"
            checked={this.state.checkedRadio === "Thursday"}
            onChange={this.onTabChange}
          />
          <label className="Input__tabs-label" htmlFor="toggle-tab2">Thurs</label>

          <input
          className="Input__tabs-radio"
            value="Friday"
            type="radio"
            name="tabs"
            id="toggle-tab3"
            checked={this.state.checkedRadio === "Friday"}
            onChange={this.onTabChange}
          />
          <label className="Input__tabs-label" htmlFor="toggle-tab3">Fri</label>

          <input
          className="Input__tabs-radio"
            value="Weekend"
            type="radio"
            name="tabs"
            id="toggle-tab4"
            checked={this.state.checkedRadio === "Weekend"}
            onChange={this.onTabChange}
          />
          <label className="Input__tabs-label" htmlFor="toggle-tab4">Sat-Sun</label>
        </div>
        <div className="Input__panels">
          <AnimateOnChange
            baseClassName="Poop"
            animationClassName="fade-in"
            animate={this.state.checkedRadio.diff !== 0}
            
          >
          <Day day={this.state.checkedRadio} key={this.state.checkedRadio}/>
          </AnimateOnChange>
        </div>
      </main>
    );
  }
}

export default Input;
