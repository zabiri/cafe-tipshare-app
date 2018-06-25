import React from "react";
import { connect } from "react-redux";

import GrossTips from "../GrossTips/GrossTips";
import Output from "../Output/Output";

import * as actionTypes from "../../store/actions";

const Fri = props => {
// My local event handler that hands off the event to the dispatch
  const grossHandler = event => {
    props.onChangeGross( event.target.value );
  };
  return (
    <div>
      <p>
        On Fridays there are 4 servers with no silverware roller, but there is
        support staff whom is paid 10% of gross tips.
      </p>
      <GrossTips changeGross={ grossHandler } gross={props.grossTips} />
      <Output days="isFri" grossTips={ props.grossTips } />
    </div>
  );
};
// My Redux block
const mapStateToProps = state => {
  return { grossTips: state.grossTips };
};
const mapDispatchToProps = dispatch => {
  return { onChangeGross: gross => dispatch({ type: actionTypes.CHANGE_GROSS, gross: gross }) };
};
// End redux block
export default connect( mapStateToProps, mapDispatchToProps )( Fri );
