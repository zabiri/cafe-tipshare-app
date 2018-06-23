import React from 'react'
import GrossTips from '../GrossTips/GrossTips'
import Output from '../Output/Output'
const SatSun = () => {
  return (
    <div>
      <p>On weekends, there are several support staff paid 15% of gross tips as well as a silverware roller.</p>
      <GrossTips/>
      <Output days="isWeekend"/>
    </div>
  )
}

export default SatSun
