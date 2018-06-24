import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import Clockout from "../Clockout/Clockout";
import GrossTips from "../GrossTips/GrossTips";
import Output from "../Output/Output";

import * as actionTypes from "../../store/actions";
import "./MonWed.css";

export class MonWed extends Component {
  onChangeTime = event => {
    const format = "h:mm a";
    const startTime = moment()
      .hour(7)
      .minute(30);
    const lateStartTime = moment()
      .hour(9)
      .minute(0);
    console.log(event && format);
    let hours = moment
      .duration(moment(event, format).diff(moment(startTime, format)))
      .asHours();
    let lateHours = moment
      .duration(moment(event, format).diff(moment(lateStartTime, format)))
      .asHours();

    this.props.onChangeHours(hours, lateHours);
  };

  onChangeGross = event => {
    this.props.onChangeGross(event.target.value);
  };
  render() {
    return (
      <div>
        <p>
          On Mondays-Wednesdays, there are no silverware rollers or support staff. Also,
          one of the three servers arrives at 9:00 am instead of 7:30 am.
        </p>
        <GrossTips
          changeGross={this.onChangeGross}
          gross={this.props.grossTips}
        />
        <Clockout changeTime={this.onChangeTime} />
        <Output
          days="isMon"
          grossTips={this.props.grossTips}
          hours={this.props.hours}
          lateHours={this.props.lateHours}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    grossTips: state.grossTips,
    hours: state.hours,
    lateHours: state.lateHours
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeGross: gross =>
      dispatch({ type: actionTypes.CHANGE_GROSS, gross: gross }),
    onChangeHours: (hours, lateHours) =>
      dispatch({ type: actionTypes.CHANGE_HOURS, hours: hours, lateHours: lateHours})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonWed);
