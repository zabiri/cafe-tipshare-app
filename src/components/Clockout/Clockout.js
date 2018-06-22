import React from 'react'
import TimePicker from 'rc-time-picker';
import moment from 'moment'
import './Clockout.css'
const Clockout = () => {
    const format = 'h:mm a';
    const defaultTime = moment().hour(15).minute(30);
    const startTime = moment().hour(7).minute(30);
    const lateStartTime = moment().hour(9).minute(0);

    function onChange(value) {
        let hours = moment
            .duration(moment(value, format)
                .diff(moment(startTime, format))
            ).asHours();
        let lateHours = moment
            .duration(moment(value, format)
                .diff(moment(lateStartTime, format))
            ).asHours();
        console.log(`I worked ${hours} hours, loretta worked ${lateHours}`);
    }
    return (
        <div>
            <label className="inputLabel" htmlFor="rc-time-picker-input">When did everyone clock out?</label>
            <TimePicker
                showSecond={false}
                defaultValue={defaultTime}
                onChange={onChange}
                format={format}
                use12Hours
                inputReadOnly
            />
        </div>
    )
}

export default Clockout
