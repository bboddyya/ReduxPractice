import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_REMOVE,
  COMMENTS_LOAD,
} from "./types";

const initialState = {
  comments: [],
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };

    case COMMENTS_LOAD:
      const commentsNew = action.data.map((res) => {
        return {
          text: res.name,
          id: res.id,
        };
      });

      return {
        ...state,
        comments: commentsNew,
      };

    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((result) => result.id === data.id);
      const newComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];
      return {
        ...state,
        comments: newComments,
      };

    case COMMENT_REMOVE:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const filtered = comments.filter((el) => el.id !== id);

        return {
          ...state,
          comments: filtered,
        };
      })();

    default:
      return state;
  }
};
