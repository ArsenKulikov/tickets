import * as types from '../actions/actionTypes';

const initialState = {
  filters: []
};

function setFilter(state, filter) {

  let newState = JSON.parse(JSON.stringify(state));
 
  if (filter === 'SET_ALL') {
    newState.filters = [];
    return newState
  } else if (newState.filters.includes(filter)) {
    const index = newState.filters.indexOf(filter);
    newState.filters.splice(index, 1);
  
    return newState;
  } else if (!newState.filters.includes(filter)) {
    
    newState.filters.push(filter);
    return newState;
  }
  //return newState;
}


export const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALL:
      return setFilter(state, 'SET_ALL');
    case types.SET_ONE:
      return setFilter(state, '1');
    case types.SET_TWO:
      return setFilter(state, '2');
    case types.SET_THREE:
      return setFilter(state, '3');
    case types.SET_NULL:
      return setFilter(state, '0');
    default:
      return state;
  }
};

export const currencyMultipliers = {
  UAH: { name: 'UAH', multiplier: 1 },
  USD: { name: 'USD', multiplier: 0.35 },
  EURO: { name: 'EURO', multiplier: 0.3 }
};

export const currencyReducer = (state = currencyMultipliers.UAH, action) => {
  switch (action.type) {
    case types.SET_CURRENCY:
      return currencyMultipliers[action.payload];
    default:
      return state;
  }
};
