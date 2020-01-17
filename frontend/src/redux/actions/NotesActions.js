const {
  FETCH_NOTES,
  ADD_NOTES_COMPLETED,
  ADD_NOTES_STARTED,
  ADD_NOTES_ERROR,
  MY_NOTES_FETCH_FAILED,
  MY_NOTES_FETCH_STARTED,
  MY_NOTES_FETCH_SUCCESSFULL,
  BOOKMARK_START,
  BOOKMARK_SUCCESS,
  BOOKMARK_ERROR,
  BOOKMARK_REMOVE_ERROR,
  BOOKMARK_REMOVE_START,
  BOOKMARK_REMOVE_SUCCESS,
  FETCH_BOOKMARK_STARTED,
  FETCH_BOOKMARK_SUCCESSFULL,
  FETCH_BOOKMARK_ERROR,
  FETCH_PRIVATE_NOTES_ERROR,
  FETCH_PRIVATE_NOTES_SUCCESS,
  FETCH_PRIVATE_NOTES_START,
  FULL_NOTE_FETCH_START,
  FULL_NOTE_FETCH_COMPLETED,
  FULL_NOTE_FETCH_ERROR,
  EDIT_NOTE_FETCH_START,
  EDIT_NOTE_FETCH_COMPLETED,
  EDIT_NOTE_FETCH_ERROR,
  REMOVE_NOTE_FETCH_START,
  REMOVE_NOTE_FETCH_COMPLETED,
  REMOVE_NOTE_FETCH_ERROR,
  UNDO_REMOVE_NOTE_FETCH_START,
  UNDO_REMOVE_NOTE_FETCH_COMPLETED,
  UNDO_REMOVE_NOTE_FETCH_ERROR
} = require("./types");
const { getToken, NOTES_API_URL } = require("./Utils");

export const fetchNotes = () => dispatch => {
  const token = getToken();
  if (token) {
    fetch(`${NOTES_API_URL}/`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      }
    })
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: FETCH_NOTES,
          payload: data,
          isLoading: true,
          error: false,
          errorMsg: ""
        })
      )
      .catch(error => {
        dispatch({
          type: FETCH_NOTES,
          payload: [],
          isLoading: false,
          error: true,
          errorMsg: error.message
        });
      });
  } else {
    fetch(`${NOTES_API_URL}/`)
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: FETCH_NOTES,
          payload: data,
          isLoading: true,
          error: false,
          errorMsg: ""
        })
      )
      .catch(error => {
        dispatch({
          type: FETCH_NOTES,
          payload: [],
          isLoading: false,
          error: true,
          errorMsg: error.message
        });
      });
  }
};

export const createNotes = NotesContent => dispatch => {
  dispatch({
    type: ADD_NOTES_STARTED,
    isLoading: true,
    payload: [],
    noteAdded: 1,
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/add/`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify({
      title: NotesContent.title,
      body: NotesContent.body,
      public: NotesContent.public
    })
  })
    .then(data =>
      dispatch({
        type: ADD_NOTES_COMPLETED,
        isLoading: false,
        payload: data,
        noteAdded: 2,
        error: false,
        errorMsg: ""
      })
    )
    .catch(error =>
      dispatch({
        type: ADD_NOTES_ERROR,
        isLoading: false,
        payload: [],
        noteAdded: 3,
        error: true,
        errorMsg: error.message
      })
    );
};

export const fetchMyNotes = () => dispatch => {
  dispatch({
    type: MY_NOTES_FETCH_STARTED,
    payload: [],
    isLoading: true,
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/my-notes/`, {
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
        type: MY_NOTES_FETCH_SUCCESSFULL,
        payload: data,
        isLoading: false,
        error: false,
        errorMsg: ""
      });
    })
    .catch(error =>
      dispatch({
        type: MY_NOTES_FETCH_FAILED,
        payload: [],
        isLoading: false,
        error: true,
        errorMsg: error.message
      })
    );
};

export const fetchBookmarks = () => dispatch => {
  dispatch({
    type: FETCH_BOOKMARK_STARTED,
    payload: [],
    isLoading: true,
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/bookmarks/`, {
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
        type: FETCH_BOOKMARK_SUCCESSFULL,
        payload: data,
        isLoading: false,
        error: false,
        errorMsg: ""
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_BOOKMARK_ERROR,
        payload: [],
        isLoading: false,
        error: true,
        errorMsg: error.message
      });
    });
};

export const addBookMark = slug => dispatch => {
  dispatch({
    type: BOOKMARK_START,
    isLoading: true,
    payload: [],
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/bookmarks/add/${slug}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    }
  })
    .then(() =>
      dispatch({
        type: BOOKMARK_SUCCESS,
        payload: slug,
        isLoading: false,
        error: false,
        errorMsg: ""
      })
    )
    .catch(error =>
      dispatch({
        type: BOOKMARK_ERROR,
        isLoading: false,
        payload: [],
        error: true,
        errorMsg: error.message
      })
    );
};

export const removeBookMark = slug => dispatch => {
  dispatch({
    type: BOOKMARK_REMOVE_START,
    isLoading: true,
    payload: [],
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/bookmark/remove/${slug}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    }
  })
    .then(() =>
      dispatch({
        type: BOOKMARK_REMOVE_SUCCESS,
        isLoading: false,
        payload: slug,
        error: false,
        errorMsg: ""
      })
    )
    .catch(error =>
      dispatch({
        type: BOOKMARK_REMOVE_ERROR,
        isLoading: false,
        payload: [],
        error: false,
        errorMsg: error.message
      })
    );
};

export const fetchPrivateNotes = () => dispatch => {
  dispatch({
    type: FETCH_PRIVATE_NOTES_START,
    payload: [],
    isLoading: true,
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/private/`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_PRIVATE_NOTES_SUCCESS,
        payload: data,
        isLoading: false,
        error: false,
        errorMsg: ""
      })
    )
    .catch(error => {
      dispatch({
        type: FETCH_PRIVATE_NOTES_ERROR,
        payload: [],
        isLoading: false,
        error: true,
        errorMsg: error.message
      });
    });
};

export const fullNote = slug => dispatch => {
  dispatch({
    type: FULL_NOTE_FETCH_START,
    payload: [],
    isLoading: true,
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/${slug}/`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FULL_NOTE_FETCH_COMPLETED,
        payload: data,
        isLoading: false,
        error: false,
        errorMsg: ""
      })
    )
    .catch(error => {
      dispatch({
        type: FULL_NOTE_FETCH_ERROR,
        payload: [],
        isLoading: false,
        error: true,
        errorMsg: error.message
      });
    });
};

export const editNote = slug => dispatch => {
  dispatch({
    type: EDIT_NOTE_FETCH_START,
    payload: [],
    isLoading: true,
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/${slug}/edit`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: EDIT_NOTE_FETCH_COMPLETED,
        payload: data,
        isLoading: false,
        error: false,
        errorMsg: ""
      })
    )
    .catch(error => {
      dispatch({
        type: EDIT_NOTE_FETCH_ERROR,
        payload: [],
        isLoading: false,
        error: true,
        errorMsg: error.message
      });
    });
};

export const removeNote = slug => dispatch => {
  dispatch({
    type: REMOVE_NOTE_FETCH_START,
    payload: [],
    isLoading: true,
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/${slug}/remove/`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: REMOVE_NOTE_FETCH_COMPLETED,
        payload: data,
        isLoading: false,
        error: false,
        errorMsg: ""
      })
    )
    .catch(error => {
      dispatch({
        type: REMOVE_NOTE_FETCH_ERROR,
        payload: [],
        isLoading: false,
        error: true,
        errorMsg: error.message
      });
    });
};

export const undoRemoveNote = slug => dispatch => {
  dispatch({
    type: UNDO_REMOVE_NOTE_FETCH_START,
    payload: [],
    isLoading: true,
    error: false,
    errorMsg: ""
  });
  fetch(`${NOTES_API_URL}/${slug}/remove/undo`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: UNDO_REMOVE_NOTE_FETCH_COMPLETED,
        payload: data,
        isLoading: false,
        error: false,
        errorMsg: ""
      })
    )
    .catch(error => {
      dispatch({
        type: UNDO_REMOVE_NOTE_FETCH_ERROR,
        payload: [],
        isLoading: false,
        error: true,
        errorMsg: error.message
      });
    });
};
