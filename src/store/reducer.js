import * as actionTypes from "./actions";

const initialState = {
  grossTips: 0,
  hours: 8,
  isPatio: false,
  lateHours: 6.5
};
// This is a utility function to dry up the code for
// populating the returns in the reducer functions.  
// this avoids mutating the state, which is a nicht-nicht.
// If I were using multiple reducers, this would probably
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

// These are the functions my reducer switch case will
// call.  Note that the names are corresponding camel
// case versions of the all-caps snake case of the 
// action types.
const changeGross = (state, action) => {
  const updatedState = {
    grossTips: action.gross
  };
  return updateObject(state, updatedState);
};

const changeHours = (state, action) => {
  const updatedState = {
    hours: action.hours,
    lateHours: action.lateHours
  }
  return updateObject(state, updatedState)
};

const togglePatio = (state, action) => {
  const updatedState = {
    isPatio: !state.isPatio
  }
  return updateObject(state, updatedState)
};

// This is my actual reducer, which I've refactored to
// be more streamlined and legible.  Instead of logic
// in the switch case, each case simply returns a
// function with state and action passed to it.  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_GROSS: return changeGross(state, action);
    case actionTypes.CHANGE_HOURS: return changeHours(state, action);
    case actionTypes.TOGGLE_PATIO: return togglePatio(state, action);
    default: return state;
  }
};
export default reducer;
