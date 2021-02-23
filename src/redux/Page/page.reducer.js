const INITIAL_STATE = {
  activePage: window.location.pathname.slice(1),
};
const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "":
    case "skills":
    case "work":
    case "resume":
    case "contact":
      return {
        ...state,
        activePage: action.type,
      };
    default:
      return state;
  }
};

export default pageReducer;
