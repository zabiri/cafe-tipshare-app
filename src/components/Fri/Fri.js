import React from 'react'
import GrossTips from '../GrossTips/GrossTips'
import Output from '../Output/Output'
const Fri = () => {
    return (
        <div>
            <p>On Fridays there are 4 servers with no silverware roller, but there is support staff whom is paid 10% of gross tips.</p>
            <GrossTips />
            <Output days="isFri" />
        </div>
    )
}

export default Fri