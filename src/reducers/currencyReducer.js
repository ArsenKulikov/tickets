import * as types from '../actions/actionTypes';

const initialState = {
  currency: { value: 'UAH', multiplier: 1 }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENCY_EURO:
      return {
        ...state,
        currency: { value: 'EURO', multiplier: 0.03 }
      };
    case types.SET_CURRENCY_USD:
      return {
        ...state,
        currency: { value: 'USD', multiplier: 0.035 }
      };
    case types.SET_CURRENCY_UAH:
      return {
        ...state,
        currency: { value: 'UAH', multiplier: 1 }
      };
    default:
      return state;
  }
};

export default reducer;
