import React from "react";
import "./GrossTips.css";

const GrossTips = props => {
  return (
    <div className="GrossTips">
      <label className="inputLabel" htmlFor="grosstips">
        Gross tips
      </label>
      <div className="GrossTips__grossInput">
        <div className="GrossTips__grossInput-preInput">
          <i className="far fa-money-bill-wave GrossTips__grossInput-preInput-moneyGlyph" />{" "}
          <span>&#36;</span>
        </div>
        <input
          className="GrossTips__grossInput-input"
          name="grosstips"
          onChange={props.changeGross}
          placeholder="Enter Gross tips"
          step="0.01"
          type="tel"
          value={props.gross}
        />
      </div>
    </div>
  );
};

export default GrossTips;
