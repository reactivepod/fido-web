import { combineReducers } from 'redux';
import {
  SELECT_COUNTRIES,
  DELETE_PODCAST,
  ADD_PODCAST,
  RECEIVE_FIDO
} from '../actions';
import find from 'lodash.find';

function podcasts(state = [], action) {
  switch (action.type) {
  case ADD_PODCAST:
    if (!find(state, (podcast) => podcast.id === action.payload.podcast.id)) {
      return [action.payload.podcast, ...state];
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
  reviews: {},
  selected: {
    name: 'Reactive',
    id: '1020286000'
  }
}, action) {
  switch (action.type) {
  case RECEIVE_FIDO:
    return Object.assign({}, state, {
      reviews: action.payload.reviews
    });
  case DELETE_PODCAST:
  case ADD_PODCAST:
    return Object.assign({}, state, {
      podcasts: podcasts(state.podcasts, action)
    });
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
