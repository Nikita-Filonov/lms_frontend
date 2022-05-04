import React, {useContext, useState} from 'react';
import {get, patch, post} from "../Utils/Api/Fetch";

const CoursesContext = React.createContext(null);


const CoursesProvider = ({children}) => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const {json, error} = await get('/courses/', true);
    !error && setCourses(json);
  };

  const createCourse = async (payload) => {
    const {json, error} = await post('/courses/', payload, true);
    !error && setCourses([...courses, json]);
  };

  const updateCourse = async (payload) => {
    const {json, error} = await patch('/courses/', payload, true);
    console.log(json, error)
  }

  return (
    <CoursesContext.Provider value={{courses, getCourses, createCourse, updateCourse}}>
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
