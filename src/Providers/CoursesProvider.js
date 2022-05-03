import React, {useContext} from 'react';

const CoursesContext = React.createContext(null);

const CoursesProvider = ({children}) => {


  return (
    <CoursesContext.Provider value={{}}>
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
