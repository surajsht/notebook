import { createContext, useContext } from "react";

const InitializeContext = createContext();

const Context = ({ children }) => {
  return (
    <InitializeContext.Provider value={{}}>
      {children}
    </InitializeContext.Provider>
  );
};

export const InvokeContext = () => useContext(InitializeContext);
export default Context;
