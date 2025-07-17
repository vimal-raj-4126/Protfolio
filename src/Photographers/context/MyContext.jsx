import React, { createContext } from "react";
import heroPage from "../json/heroPage";
import aboutPage from "../json/aboutPage";
import skillPage from "../json/skillPage";
import techstackPage from "../json/techstackPage";
import testimonialsPage from "../json/testimonialsPage";
import blogPage from "../json/blogPage";
import certificationPage from "../json/certificationPage";
import workExperiencePage from "../json/workExperiencePage";
import galleryPage from "../json/galleryPage";
import postPage from "../json/postPage";
import gearPage from "../json/gearPage";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  return (
    <MyContext.Provider
      value={{
        hero: heroPage[0],
        about: aboutPage[0],
        Myskilldata: skillPage,
        techstackdata: techstackPage,
        testimonials: testimonialsPage,
        blogdata: blogPage,
        certification: certificationPage,
        experience:workExperiencePage,
        gallery: galleryPage,
        post:postPage,
        gear: gearPage
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
