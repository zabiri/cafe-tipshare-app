import React from "react";
import "./GrossTips.css";

const GrossTips = props => {
  return <div>
      <label className="inputLabel" htmlFor="grosstips">
        Gross tips:
      </label>
      <div className="grossInput">
        <div className="grossInput__moneySign">
          <i class="far fa-money-bill-wave grossInput__moneyGlyph" /> <span>&#36;</span>
        </div>
        <input className="grossInput__input" name="grosstips" step="0.01" onChange={props.changeGross} placeholder="Enter Gross tips" type="tel" value={props.gross} />
      </div>
    </div>;
};

export default GrossTips;
