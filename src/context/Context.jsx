import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { auth } from "../fireConfig/FireConfig";
import { onAuthStateChanged } from "firebase/auth";

const InitializeContext = createContext();

const Context = ({ children }) => {
  const [notePopupState, setNotePopupState] = useState(false);
  const [gridLayout, setGridLayout] = useState(true);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [currentNotes, setCurrentNotes] = useState([]);

  useEffect(() => {
    const checkAuthStatus = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setProfileLoading(false);
    });

    return () => checkAuthStatus();
  }, [auth]);

  const contextValue = {
    notePopupState,
    setNotePopupState,
    gridLayout,
    setGridLayout,
    sidebarActive,
    setSidebarActive,
    currentUser,
    profileLoading,
    currentNotes,
    setCurrentNotes,
  };

  return (
    <InitializeContext.Provider value={contextValue}>
      {children}
    </InitializeContext.Provider>
  );
};

export const InvokeContext = () => useContext(InitializeContext);
export default Context;
