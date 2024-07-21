import { useState } from "react";
import { createContext, useContext } from "react";

const InitializeContext = createContext();

const Context = ({ children }) => {
  const [notePopupState, setNotePopupState] = useState(false);
  const [gridLayout, setGridLayout] = useState(true);
  const [sidebarActive, setSidebarActive] = useState(false);

  const contextValue = {
    notePopupState,
    setNotePopupState,
    gridLayout,
    setGridLayout,
    sidebarActive,
    setSidebarActive,
  };

  return (
    <InitializeContext.Provider value={contextValue}>
      {children}
    </InitializeContext.Provider>
  );
};

export const InvokeContext = () => useContext(InitializeContext);
export default Context;
