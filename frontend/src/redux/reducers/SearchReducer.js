import { SEARCH_STARTED, SEARCH_ENDED, SEARCH_ERROR } from "../actions/types";

const initialState = {
  results: [],
  isSearching: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_STARTED:
    case SEARCH_ENDED:
    case SEARCH_ERROR:
      return {
        ...state,
        results: action.results,
        isSearching: action.isSearching,
        error: action.error
      };
    default:
      return state;
  }
}
