import React from "react";
import { connect } from 'react-redux'
import GrossTips from "../GrossTips/GrossTips";
import Output from "../Output/Output";
import * as actionTypes from '../../store/actions'
import "./SatSun.css";

const SatSun = (props) => {
  return (
    <div>
      <p>
        On weekends, there are several support staff paid 15% of gross tips as
        well as a silverware roller.
      </p>
      <GrossTips />
      <div className="patioBlock">
        <div className="styledCheck">
          <input id="styledCheck" type="checkbox" name="wasThePatioOpen" onChange={props.onChangePatio}/>
          <label htmlFor="styledCheck" />
        </div>
        <p className="label">Check here if there was a patio server</p>
      </div>
      <Output days="isWeekend" />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    grossTips: state.grossTips,
    isPatio: state.isPatio
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeGross: gross =>
      dispatch({ type: actionTypes.CHANGE_GROSS, gross: gross }),
    onChangePatio: () =>
      dispatch({ type: actionTypes.TOGGLE_PATIO })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SatSun);
