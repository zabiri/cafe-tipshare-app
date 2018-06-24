import * as actionTypes from "./actions";

const initialState = {
  grossTips: 0,
  hours: 8,
  lateHours: 6.5,
  isPatio: false
};

const reducer = (state = initialState, action) => {
  //if statements or switch cases that immutably update the state like so:
  switch (action.type) {
    case actionTypes.TOGGLE_PATIO:
      return {
        ...state,
        isPatio: !state.isPatio
      };
    case actionTypes.CHANGE_GROSS:
      console.log(action.gross);
      return {
        ...state,
        grossTips: action.gross
      };
    case actionTypes.CHANGE_HOURS:
      console.log(`${action.hours} and ${action.lateHours}`);

      return {
        ...state,
        hours: action.hours,
        lateHours: action.lateHours
      };
    default:
      return state;
  }
};
export default reducer;
