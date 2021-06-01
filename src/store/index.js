import React, { createContext } from "react";

const initialStore = {
  user: null,
};

const store = createContext(initialStore);
