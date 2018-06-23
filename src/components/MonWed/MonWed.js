import React, { Component } from 'react'
import './MonWed.css'
import GrossTips from '../GrossTips/GrossTips'
import Clockout from '../Clockout/Clockout'
import Output from '../Output/Output'
export class MonWed extends Component {

  render() {
    return (
      <div>
        <p>On Mondays, there are no silverware rollers or support staff.  Also, one of the three servers arrives at 9:00 am instead of 7:30 am.</p>
        <GrossTips changeGross={}/>
        <Clockout />
        <Output days="isMon"  />
      </div>
    )
  }
}
export default MonWed
