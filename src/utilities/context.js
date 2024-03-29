import React from "react";

const AppContext = React.createContext({});

export const ContextProvider = AppContext.Provider;
export const ContextConsumer = AppContext.Consumer;
export default AppContext;