import React, {useEffect} from "react";
import {MainLayout} from "../../Components/Layouts/MainLayout";
import {connect} from 'react-redux';
import {CourseEditor} from "../../Components/Common/Editor/CourseEditor";
import {useParams} from 'react-router-dom';
import {useCourses} from "../../Providers/CoursesProvider";

const CreateCourse = ({course}) => {
  const {courseId} = useParams();
  const {getCourse} = useCourses();

  useEffect(() => {
    (async () => (courseId && !course?.id) && await getCourse(courseId))()
  }, [courseId, course?.id, getCourse]);

  return (
    <MainLayout>
      <CourseEditor course={course}/>
    </MainLayout>
  )
};

const getState = (state) => ({course: state.courses.course});
export default connect(getState, null)(CreateCourse);
