import React from 'react'
import { connect } from 'react-redux'
import GrossTips from '../GrossTips/GrossTips'
import Output from '../Output/Output'
import * as actionTypes from '../../store/actions'
const Thurs = (props) => {
  return (
    <div>
      <p>On Thursdays there are 3 servers with no silverware roller, but there is support staff whom is paid 10% of gross tips.</p>
      <GrossTips changeGross={props.onChangeGross}/>
      <Output days="isThurs"/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    grossTips: state.grossTips
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onChangeGross: gross =>
      dispatch({type: actionTypes.CHANGE_GROSS, gross: gross})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thurs)
