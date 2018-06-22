import React from 'react'
import './GrossTips.css'

const GrossTips = () => {
    return (
        <div>
            <label className="inputLabel" htmlFor="grosstips">Gross tips:</label>
            <input className="grossInput" type="tel" name="grosstips" placeholder="Enter Gross tips" />
        </div>
    )
}

export default GrossTips
