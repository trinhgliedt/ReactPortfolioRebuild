const INITIAL_STATE = {
  activePage: window.location.pathname.slice(1),
};
const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "":
      return {
        activePage: "",
      };
    case "skills":
      return {
        activePage: "skills",
      };
    case "work":
      return {
        activePage: "work",
      };
    case "resume":
      return {
        activePage: "resume",
      };
    case "contact":
      return {
        activePage: "contact",
      };
    default:
      return state;
  }
};

export default pageReducer;
