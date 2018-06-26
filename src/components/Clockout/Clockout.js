import React from "react";
// TimePicker is a stopgap for now -- I plan on eventually making
// my own moment.js based component when I have time (no pun intended).
import TimePicker from "rc-time-picker";
import moment from "moment";

import "./Clockout.css";

const Clockout = props => {
  const format = "h:mm a";
  // This default clockout time is 3:30 PM, which is a good starting
  // point for weekday and weekend shifts.
  const defaultTime = moment()
    .hour(15)
    .minute(30);
  return (
    <div>
      <label className="inputLabel" htmlFor="rc-time-picker-input">
        When did everyone clock out?
      </label>
      <div className="TimePicker">
        <div className="TimePicker__glyph">
          <i class="far fa-alarm-clock" />
        </div>
        <TimePicker
          className="TimePicker__input"
          showSecond={false}
          defaultValue={defaultTime}
          onChange={props.changeTime}
          format={format}
          use12Hours
          inputReadOnly
        />
      </div>
    </div>
  );
};

export default Clockout;
