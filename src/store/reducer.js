import * as actionTypes from "./actions";

const initialState = {
  grossTips: 0,
  hours: 8,
  isPatio: false,
  lateHours: 6.5
};
// This is a utility function to dry up the code for
// populating the returns in the reducer functions.  If
// I were using multiple reducers, this would probably
// be in a seperate .js file, but this is a simple app
// with just one reducer.  Also, the usefulness of this
// would be greater if I were using less of a
// one-dimensional state object.
const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

const changeGross = (state, action) => {
  const updatedState = {
    grossTips: action.gross
  };
  return updateObject(state, updatedState);
};

const togglePatio = (state, action) => {
  const updatedState = {
    isPatio: !state.isPatio
  }
  return updateObject(state, updatedState)
};

const changeHours = (state, action) => {
  const updatedState = {
    hours: action.hours,
    lateHours: action.lateHours
  }
  return updateObject(state, updatedState)
};

const reducer = (state = initialState, action) => {
  //if statements or switch cases that immutably update the state like so:
  switch (action.type) {
    case actionTypes.TOGGLE_PATIO: return togglePatio(state, action);
    case actionTypes.CHANGE_GROSS: return changeGross(state, action);
    case actionTypes.CHANGE_HOURS: return changeHours(state, action);
    default: return state;
  }
};
export default reducer;
