import { createContext, useContext, useReducer } from "react";

// create context where data lives
export const StateContext = createContext();

// state provider is data layer (higher order component)
// set up data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
};

// allow to pull data layer
export const useStateValue = () => useContext(StateContext);