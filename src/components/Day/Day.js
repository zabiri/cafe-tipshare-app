import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import Clockout from "../Clockout/Clockout";
import GrossTips from "../GrossTips/GrossTips";
import Output from "../Output/Output";

import * as actionTypes from "../../store/actions";
import "./Day.css";

const Day = props => {
  // My local event handlers that hand off the event to the dispatch
  const grossHandler = event => {
    props.onChangeGross(event.target.value);
  };
  const onChangeTime = event => {
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
    props.onChangeHours(hours, lateHours);
  };

  // This code determines from props what to render to the screen
  const dayBlockInfo = {
    MTW: {
      description:
        "On Mondays-Wednesdays, there is no support staff. One of the three servers arrives at 9:00 am.",
      extraJSX: <Clockout changeTime={onChangeTime} />
    },
    Thursday: {
      description:
        "On Thursdays there are three servers and a support staff member who makes 10% of gross tips.",
      extraJSX: null
    },
    Friday: {
      description:
        "On Fridays there are four servers and a support staff member who makes 10% of gross tips.",
      extraJSX: null
    },
    Weekend: {
      description:
        "On weekends, support staff split 15% of gross tips, and there is a silverware roller. Weather permitting, there is a patio server.",
      extraJSX: (
        <div className="Day__patioBlock">
          <div className="Day__patioBlock-styledCheck">
            <input
              className="Day__patioBlock-styledCheck-invisibleBox"
              id="styledCheck"
              name="wasThePatioOpen"
              onChange={props.onChangePatio}
              type="checkbox"
            />
            <label className="Day__patioBlock-styledCheck-visibleBox" htmlFor="styledCheck" />
          </div>
          <p className="Day__patioBlock-label">Check for patio server</p>
        </div>
      )
    }
  };
  let dayBlock = null;
  if (props.day === "MTW") {
    dayBlock = dayBlockInfo.MTW;
  }
  if (props.day === "Friday") {
    dayBlock = dayBlockInfo.Friday;
  }
  if (props.day === "Thursday") {
    dayBlock = dayBlockInfo.Thursday;
  }
  if (props.day === "Weekend") {
    dayBlock = dayBlockInfo.Weekend;
  }
  return (
    <div className="Day">
      <p className="Day__description">{dayBlock.description}</p>
      <hr/>
      <GrossTips changeGross={grossHandler} gross={props.grossTips} />
      {dayBlock.extraJSX}
      <Output
        day={props.day}
        grossTips={props.grossTips}
        hours={props.hours}
        lateHours={props.lateHours}
        patio={props.isPatio}
      />
    </div>
  );
};
// My Redux block
const mapStateToProps = state => {
  return {
    grossTips: state.grossTips,
    hours: state.hours,
    isPatio: state.isPatio,
    lateHours: state.lateHours
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChangeGross: gross =>
      dispatch({
        type: actionTypes.CHANGE_GROSS,
        gross: gross
      }),
    onChangeHours: (hours, lateHours) =>
      dispatch({
        type: actionTypes.CHANGE_HOURS,
        hours: hours,
        lateHours: lateHours
      }),
    onChangePatio: () =>
      dispatch({
        type: actionTypes.TOGGLE_PATIO
      })
  };
};
// End redux block
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);
