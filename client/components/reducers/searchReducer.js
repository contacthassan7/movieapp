// First test the action
// Action has two parameters (type and payload)
// Type is the state and payload is the data coming

import { SEARCH_MOVIE } from '../actions/types'

// create initialState
const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      }
    default:
      return state
  }
}
