import fido from '@reactive/fido';

export const REQUEST_FIDO = 'REQUEST_FIDO';
export const RECEIVE_FIDO = 'RECEIVE_FIDO';

export const SELECT_COUNTRIES = 'SELECT_COUNTRIES';

export const DELETE_PODCAST = 'DELETE_PODCAST';
export const SELECT_PODCAST = 'SELECT_PODCAST';
export const ADD_PODCAST = 'ADD_PODCAST';

function receiveFido(reviews) {
  return {
    type: RECEIVE_FIDO,
    payload: {
      reviews,
      receivedAt: Date.now()
    }
  }
}

function requestFido(podcast) {
  return {
    type: REQUEST_FIDO,
    payload: {
      podcast
    }
  }
}

export function fetchFido() {
  return (dispatch, getState) => {
    const state = getState().fido;

    const data = state.podcasts.map((podcast) => {
      return {
        name: podcast.name,
        podcastId: podcast.id,
        countries: state.countries
      }
    });
    dispatch(requestFido(data));

    return fido(data).then((result) => dispatch(receiveFido(result)))
  }
}

export function selectCountries(countries) {
  return {
    type: SELECT_COUNTRIES,
    payload: {
      countries
    }
  }
}

export function deletePodcast(id) {
  return {
    type: DELETE_PODCAST,
    payload: {
      id
    }
  }
}

export function selectPodcast(id) {
  return {
    type: SELECT_PODCAST,
    payload: {
      id
    }
  }
}

export function addPodcast(podcast) {
  return {
    type: ADD_PODCAST,
    payload: {
      podcast
    }
  }
}
