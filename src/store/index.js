import React, { useReducer, useEffect } from "react";

import { reducer } from "./reducer";

export const INITIAL_STATE = {
  user: null,
};

const store = React.createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // Subscribe to changes
  useEffect(() => {
    console.log("STORE CHANGES:", state);
  }, [state]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
