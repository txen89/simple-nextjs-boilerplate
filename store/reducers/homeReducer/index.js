const initialState = {
  homeData: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "HOME_PAGE_LOADED":
      return { ...state, homeData: action.payload };
    default:
      return state;
  }
};
