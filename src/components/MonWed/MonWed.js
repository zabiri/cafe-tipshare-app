import React from 'react'
import './MonWed.css'
import GrossTips from '../GrossTips/GrossTips'
import Clockout from '../Clockout/Clockout'
const MonWed = () => {


  return (
    <div>
      <p>On Mondays, there are no silverware rollers or support staff.  Also, one of the three servers arrives at 9:00 am instead of 7:30 am.</p>
      <GrossTips />
      <Clockout/>

    </div>
  )
}

export default MonWed
