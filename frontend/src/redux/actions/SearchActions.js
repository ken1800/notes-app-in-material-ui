import { SEARCH_STARTED, SEARCH_ERROR, SEARCH_ENDED } from "./types";
import { getToken, NOTES_API_URL } from "./Utils";

export const SearchNotes = event => dispatch => {
  dispatch({
    type: SEARCH_STARTED,
    isSearching: true,
    results: [],
    error: null
  });
  if (event.target.value.length > 0) {
    fetch(`${NOTES_API_URL}/search/${event.target.value}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: SEARCH_ENDED,
          isSearching: false,
          results: data,
          error: null
        });
      })
      .catch(error => {
        dispatch({
          type: SEARCH_ERROR,
          isSearching: false,
          results: [],
          error: error
        });
      });
  } else {
    dispatch({
      type: SEARCH_ENDED,
      isSearching: false,
      results: [],
      error: null
    });
  }
};
