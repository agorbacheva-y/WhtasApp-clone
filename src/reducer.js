// initial state is how data layer looks at beginning
export const initialState = {
   user: null,
};

// push info into data layer
export const actionTypes = {
  SET_USER: "SET_USER",
};

// if dispatch set user action, keep state but change user to info
// that we dispatched
const reducer = ( state, action ) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;