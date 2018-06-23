import React from "react";
import TimePicker from "rc-time-picker";
import moment from "moment";
import "./Clockout.css";
const Clockout = props => {
  const format = "h:mm a";
  const defaultTime = moment()
    .hour(15)
    .minute(30);
  return (
    <div>
      <label className="inputLabel" htmlFor="rc-time-picker-input">
        When did everyone clock out?
      </label>
      <TimePicker
        showSecond={false}
        defaultValue={defaultTime}
        onChange={props.changeTime}
        format={format}
        use12Hours
        inputReadOnly
      />
    </div>
  );
};

export default Clockout;
