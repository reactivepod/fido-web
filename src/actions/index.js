import fido from '@reactive/fido';

export const REQUEST_FIDO = 'REQUEST_FIDO';
export const RECEIVE_FIDO = 'RECEIVE_FIDO';
export const SELECT_FIDO = 'SELECT_FIDO';
export const SELECT_COUNTRIES = 'SELECT_COUNTRIES';
export const INVALIDATE_FIDO = 'INVALIDATE_FIDO';
export const DELETE_PODCAST = 'DELETE_PODCAST';

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
    // dispatch(requestFido(podcast));
    const state = getState().fido;

    const data = {
      podcasts: state.podcasts.map(podcast => {
        return {
          name: podcast.name,
          podcastId: podcast.id,
          countries: state.countries
        }
      })
    };
    console.log('fetch', data)

    return fido(data.podcasts).then(result => dispatch(receiveFido(result)))
  }
}

export function selectFido(podcast) {
  return {
    type: SELECT_FIDO,
    payload: {
      podcast
    }
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
