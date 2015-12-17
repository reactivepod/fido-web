import { combineReducers } from 'redux';
import { LOAD, SAVE } from 'redux-storage';
import {
  SELECT_COUNTRIES,
  DELETE_PODCAST,
  SELECT_PODCAST,
  ADD_PODCAST,
  RECEIVE_FIDO,
  REQUEST_FIDO
} from '../actions';
import find from 'lodash.find';

function podcasts(state = [], action) {
  switch (action.type) {
  case ADD_PODCAST:
    if (!find(state, (podcast) => podcast.id === action.payload.podcast.id)) {
      return [...state, action.payload.podcast];
    } else {
      return state;
    };
  case DELETE_PODCAST:
    return state.filter((podcast) => podcast.id !== action.payload.id);
  default:
    return state
  }
}

function fido(state = {
  countries: ['us', 'de', 'gb', 'se', 'ca', 'at', 'au', 'se', 'nl', 'br', 'mx', 'ru', 'gr', 'ar', 'za', 'ch', 'pt'],
  podcasts: [],
  fido: {},
  isFetching: false,
  selected: '1020286000'
}, action) {
  switch (action.type) {
  case LOAD:
    return Object.assign({}, state, action.payload.fido);
  case REQUEST_FIDO:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_FIDO:
    return Object.assign({}, state, {
      fido: action.payload.data,
      isFetching: false
    });
  case DELETE_PODCAST:
  case ADD_PODCAST:
    return Object.assign({}, state, {
      podcasts: podcasts(state.podcasts, action)
    });
  case SELECT_PODCAST:
    return Object.assign({}, state, {
      selected: action.payload.id
    })
  case SELECT_COUNTRIES:
    return Object.assign({}, state, {
      countries: action.payload.countries
    })
  default:
    return state
  }
}

const rootReducer = combineReducers({
  fido,
});

export default rootReducer;
