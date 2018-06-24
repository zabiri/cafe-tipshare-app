import React, { Fragment } from "react";
import "./Output.css";
const Output = props => {
  let content = null;
  let split = 3;
  let payRate = 0;
  let supportTips = 0;
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

      break;
    case "isThurs":
      supportTips = props.grossTips * 0.1;
      split = (props.grossTips - supportTips) / 3;
      content = (
        <Fragment>
          <p>
            All three servers made ${split.toFixed(2)}, and the support staff
            made ${supportTips.toFixed(2)}.
          </p>
        </Fragment>
      );

      break;
    case "isFri":
      supportTips = props.grossTips * 0.1;
      split = (props.grossTips - supportTips) / 4;
      content = (
        <Fragment>
          <p>
            All four servers made ${split.toFixed(2)}, and the support staff
            made ${supportTips.toFixed(2)}.
          </p>
        </Fragment>
      );

      break;
    case "isWeekend":
      let serverNumber = props.patio ? 5 : 4;
      supportTips = props.grossTips * 0.15;
      split = (props.grossTips - supportTips - 65) / serverNumber;
      content = (
        <Fragment>
          <p>
            All {props.patio ? "five" : "four"} servers made ${split.toFixed(2)},
            and the support staff made ${supportTips.toFixed(2)}.
          </p>
          <p>
            This includes $25.00 for the silverware roller, and a minimum of
            $40.00 for the kitchen.
          </p>
        </Fragment>
      );

      break;
    default: return null
  }
  return <div className="outputBlock">{content}</div>;
};

export default Output;
