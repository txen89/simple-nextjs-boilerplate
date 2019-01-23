export const testAction = data => dispatch => {
  dispatch({
    type: "HOME_PAGE_LOADED",
    payload: data
  });
};
