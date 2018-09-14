//import * as types from './actionTypes';
import { SET_CURRENCY } from './actionTypes';

export const currencyMultipliers = {
  UAH: { name: 'UAH', multiplier: 1 },
  USD: { name: 'USD', multiplier: 0.35 },
  EURO: { name: 'EURO', multiplier: 0.3 }
};

export const setVisibilityFilter = filter => ({
  type: filter
});

export const setCurrency = currency => ({
  type: SET_CURRENCY,
  payload: currency
});
