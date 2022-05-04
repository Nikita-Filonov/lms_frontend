import React, {useContext, useState} from 'react';
import {get, patch, post} from "../Utils/Api/Fetch";
import type {Course} from "../Utils/Models/Course";
import {CreateCourse, UpdateCourse} from "../Utils/Models/Course";

const CoursesContext = React.createContext(null);


const CoursesProvider = ({children}) => {
  const [courses, setCourses]: Course[] = useState([]);

  const getCourses = async () => {
    const {json, error} = await get('/courses/', true);
    !error && setCourses(json);
  };

  const createCourse = async (payload: CreateCourse) => {
    const {json, error} = await post('/courses/', payload, true);
    !error && setCourses([...courses, json]);
  };

  const updateCourse = async (payload: UpdateCourse) => {
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
