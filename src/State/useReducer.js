import { actionTypes } from "./actionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  terms: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.INCREASE:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case actionTypes.DECREASE:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        terms: !state.terms,
      };
    default:
      return state;
  }
};
