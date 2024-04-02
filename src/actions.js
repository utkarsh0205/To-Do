// actions.js
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const MARK_DONE = "MARK_DONE";
export const TOGGLE_SELECT = "TOGGLE_SELECT";
export const SELECT_TASK = "SELECT_TASK";

// Action Creators
export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    text,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id,
  },
});

export const editTask = (id, newText) => ({
  type: EDIT_TASK,
  payload: {
    id,
    newText,
  },
});

export const markDone = (id) => ({
  type: MARK_DONE,
  payload: {
    id,
  },
});

export const toggleSelect = (id) => ({
  type: TOGGLE_SELECT,
  payload: {
    id,
  },
});

export const selectTask = (id) => ({
  type: SELECT_TASK,
  payload: {
    id,
  },
});
