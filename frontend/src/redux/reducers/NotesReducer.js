import {
  FETCH_NOTES,
  ADD_NOTES_ERROR,
  ADD_NOTES_COMPLETED,
  ADD_NOTES_STARTED,
  MY_NOTES_FETCH_FAILED,
  MY_NOTES_FETCH_STARTED,
  MY_NOTES_FETCH_SUCCESSFULL,
  FETCH_BOOKMARK_STARTED,
  FETCH_BOOKMARK_SUCCESSFULL,
  FETCH_BOOKMARK_ERROR,
  BOOKMARK_REMOVE_START,
  BOOKMARK_REMOVE_ERROR,
  BOOKMARK_REMOVE_SUCCESS,
  BOOKMARK_START,
  BOOKMARK_ERROR,
  BOOKMARK_SUCCESS,
  FETCH_PRIVATE_NOTES_ERROR,
  FETCH_PRIVATE_NOTES_SUCCESS,
  FETCH_PRIVATE_NOTES_START
} from "../actions/types";

const initialState = {
  fetchedNotes: [],
  bookmarkedNotes: [],
  privateNotes: [],
  isLoading: true,
  error: false,
  errorMsg: "",
  isNoteAdded: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        fetchedNotes: action.payload,
        isLoading: !action.isLoading,
        error: action.error,
        errorMsg: action.errorMsg
      };
    case MY_NOTES_FETCH_FAILED:
    case MY_NOTES_FETCH_STARTED:
    case MY_NOTES_FETCH_SUCCESSFULL:
      return {
        ...state,
        fetchedNotes: action.payload,
        isLoading: action.isLoading,
        error: action.error,
        errorMsg: action.errorMsg
      };
    case FETCH_PRIVATE_NOTES_ERROR:
    case FETCH_PRIVATE_NOTES_SUCCESS:
    case FETCH_PRIVATE_NOTES_START:
      return {
        ...state,
        privateNotes: action.payload,
        isLoading: action.isLoading,
        error: action.error,
        errorMsg: action.errorMsg
      };
    case FETCH_BOOKMARK_STARTED:
    case FETCH_BOOKMARK_SUCCESSFULL:
    case FETCH_BOOKMARK_ERROR:
      return {
        ...state,
        bookmarkedNotes: action.payload,
        isLoading: action.isLoading,
        error: action.error,
        errorMsg: action.errorMsg
      };
    case ADD_NOTES_STARTED:
    case ADD_NOTES_ERROR:
    case ADD_NOTES_COMPLETED:
      return {
        ...state,
        fetchedNote: action.payload,
        isLoading: !action.isLoading,
        isNoteAdded: action.noteAdded,
        error: action.error,
        errorMsg: action.errorMsg
      };
    case BOOKMARK_ERROR:
    case BOOKMARK_START:
    case BOOKMARK_SUCCESS:
      return {
        ...state,
        fetchedNotes: state.fetchedNotes.filter(
          note => note.id !== action.payload
        ),
        isLoading: action.isLoading
      };
    case BOOKMARK_REMOVE_START:
    case BOOKMARK_REMOVE_ERROR:
    case BOOKMARK_REMOVE_SUCCESS: {
      return {
        ...state,
        bookmarkedNotes: state.bookmarkedNotes.filter(
          note => note.id !== action.payload
        ),
        isLoading: action.isLoading,
        error: action.error,
        errorMsg: action.errorMsg
      };
    }
    default:
      return state;
  }
}
