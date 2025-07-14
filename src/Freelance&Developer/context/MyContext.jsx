import React, { createContext } from "react";
import heroPage from "../json/heroPage";
import aboutPage from "../json/aboutPage";
import skillPage from "../json/skillPage";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider
      value={{
        hero: heroPage[0],
        about: aboutPage[0],
        Myskilldata:skillPage
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
