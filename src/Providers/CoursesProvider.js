import React, {useContext, useState} from 'react';
import {get, patch, post} from "../Utils/Api/Fetch";
import {store} from "../index";
import {SET_COURSE} from "../Redux/Courses/actionTypes";

const CoursesContext = React.createContext(null);


const CoursesProvider = ({children}) => {
  const [courses, setCourses] = useState([]);

  const getCourse = async (courseId: number) => {
    const {error, json} = await get(`/courses/${courseId}/`, true);
    !error && store.dispatch({type: SET_COURSE, payload: json});
  }

  const getCourses = async () => {
    const {json, error} = await get('/courses/', true);
    !error && setCourses(json);
  };

  const createCourse = async (payload) => {
    const {json, error} = await post('/courses/', payload, true);
    !error && setCourses([...courses, json]);
  };

  const updateCourse = async (courseId, payload) => {
    const {json, error} = await patch(`/courses/${courseId}/`, payload, true);
    console.log(json, error)
  }

  return (
    <CoursesContext.Provider value={{courses, getCourse, getCourses, createCourse, updateCourse}}>
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
