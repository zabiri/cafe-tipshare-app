import React, { Fragment } from "react";
import "./Output.css";
const Output = props => {
  let dayBlock = null;
  let content = null;
  let split = 3;
  let payRate = 0
  switch (props.days) {
    case "isMon":
      let totalHours = props.hours * 2 + props.lateHours;
      payRate = (props.grossTips / totalHours).toFixed(2);
      let earlyTips = (payRate * props.hours).toFixed(2);
      let lateTips = (payRate * props.lateHours).toFixed(2);
      content = (
        <Fragment>
          <p>
            Both of the 7:30 servers made ${earlyTips}, and the 9:00 server made
            ${lateTips}.
          </p>
          <p>The hourly rate was ${payRate} per hour.</p>
        </Fragment>
      );
      dayBlock = "Monday-Wednesday";
      break;
    case "isThurs":
      split = props.grossTips;
      content = (
        <Fragment>
          <p>
            All three servers made ${split}.
          </p>
        </Fragment>
      );
      dayBlock = "Thursday";
      break;
    case "isFri":
      split = props.grossTips / 4;
      content = (
        <Fragment>
          <p>
            Both of the 7:30 servers made ${earlyTips}, and the 9:00 server made
            ${lateTips}.
          </p>
          <p>The hourly rate was ${payRate} per hour.</p>
        </Fragment>
      );
      dayBlock = "Friday";
      break;
    case "isWeekend":
      dayBlock = "the weekend";
      break;
    default:
      dayBlock = null;
  }
  return <div className="outputBlock">{content}</div>;
};

export default Output;
