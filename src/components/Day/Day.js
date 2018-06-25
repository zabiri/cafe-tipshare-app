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
        "On Mondays-Wednesdays, there are no silverware rollers or support staff.Also, one of the three servers arrives at 9: 00 am instead of 7: 30 am.",
      extraJSX: <Clockout changeTime={onChangeTime} />
    },
    Thursday: {
      description:
        "On Thursdays there are 3 servers with no silverware roller, but there is support staff whom is paid 10% of gross tips.",
      extraJSX: null
    },
    Friday: {
      description:
        "On Fridays there are 4 servers with no silverware roller, but there is support staff whom is paid 10 % of gross tips.",
      extraJSX: null
    },
    Weekend: {
      description:
        "On weekends, there are several support staff paid 15% of gross tips as well as a silverware roller.",
      extraJSX: (
        <div className="patioBlock">
          <div className="styledCheck">
            <input
              id="styledCheck"
              type="checkbox"
              name="wasThePatioOpen"
              onChange={props.onChangePatio}
            />
            <label htmlFor="styledCheck" />
          </div>
          <p className="label">Check here if there was a patio server</p>
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
      <p>{dayBlock.description}</p>
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