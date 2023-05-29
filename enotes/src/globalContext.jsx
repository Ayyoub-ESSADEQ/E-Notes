import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [mainPage, setMainPage] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        mainPage,
        setMainPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
