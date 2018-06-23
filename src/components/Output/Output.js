import React from 'react'

const Output = (props) => {
  let dayBlock = null;
  switch (props.days) {
    case "isMon":
        dayBlock = "Monday-Wednesday"
        break;
    case "isThurs":
        dayBlock = "Thursday-Friday"
        break;
    case "isWeekend":
        dayBlock = "the weekend"
        break;
    default:
        dayBlock = null;
  }
  return (
    <div>
      Your tips for {dayBlock} are something.
    </div>
  )
}

export default Output

