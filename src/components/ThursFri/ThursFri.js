import React from 'react'
import GrossTips from '../GrossTips/GrossTips'
import Output from '../Output/Output'
const ThursFri = () => {
  return (
    <div>
      <p>On Thursdays and Fridays, there is no silverware roller, but there is support staff whom is paid 10% of gross tips.</p>
      <GrossTips/>
      <Output days="isThurs"/>
    </div>
  )
}

export default ThursFri
