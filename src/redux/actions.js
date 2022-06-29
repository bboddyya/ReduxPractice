import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_REMOVE,
  COMMENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./types";

export function incrementLike() {
  return {
    type: INCREMENT,
  };
}

export function decrementLike() {
  return {
    type: DECREMENT,
  };
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}

export function commentRemove(id) {
  return {
    type: COMMENT_REMOVE,
    id,
  };
}

export function commentsLoad() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      const result = await response.json();

      setTimeout(() => {
        dispatch(loaderOff());
        dispatch({
          type: COMMENTS_LOAD,
          data: result,
        });
      }, 1000);
    } catch (err) {
      dispatch(errorOn("Ошибка API"));
      dispatch(loaderOff());
    }
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });

    setTimeout(() => {
      dispatch(errorOff());
    }, 8000);
  };
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}
