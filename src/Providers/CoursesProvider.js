import React, {useContext, useState} from 'react';
import {get} from "../Utils/Api/Fetch";

const CoursesContext = React.createContext(null);

const CoursesProvider = ({children}) => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const {json, error} = await get('/courses/', true);
    !error && setCourses(json);
  }

  return (
    <CoursesContext.Provider value={{courses, getCourses}}>
      {children}
    </CoursesContext.Provider>
  );
};

const useCourses = () => {
  const event = useContext(CoursesContext);
  if (event == null) {
    throw new Error('useCourses() called outside of a CoursesProvider?');
  }
  return event;
};

export {CoursesProvider, useCourses};
