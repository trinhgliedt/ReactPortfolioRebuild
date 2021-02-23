import pageTypes from "./page.types";
const INITIAL_STATE = {
  activePage: "",
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pageTypes.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
