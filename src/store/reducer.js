import * as actionTypes from "./actions";

const initialState = {
    grossTips: null,
    hourly: null,
    isPatio: false,
    lateHours: null,
    serviceTips: null,
    shiftLength: null,
    tipsPer: null,
    totalHours: null
}

const reducer = (state = initialState, action) => {
  //if statements or switch cases that immutably update the state like so:
  switch (action.type) {
    case actionTypes.TOGGLE_PATIO:
      return {
        ...state,
        isPatio: !state.isPatio
      };
    case actionTypes.CHANGE_GROSS:
    console.log(action.gross)
      return {
          ...state,
          grossTips: action.gross
      }
    default: return state;
  }
};
export default reducer;
