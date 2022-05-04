import React, {useEffect} from "react";
import {MainLayout} from "../../Components/Layouts/MainLayout";
import {connect} from 'react-redux';
import {CourseEditor} from "../../Components/Common/Editor/CourseEditor";
import {useParams} from 'react-router-dom';
import {useCourses} from "../../Providers/CoursesProvider";
import {EditorRenderer} from "../../Components/Common/Editor/EdtitorRenderer/EdtitorRenderer";

const CreateCourse = ({course}) => {
  const {courseId} = useParams();
  const {getCourse} = useCourses();

  useEffect(() => {
    (async () => (courseId && !course?.id) && await getCourse(courseId))()
  }, [courseId, course?.id, getCourse]);

  return (
    <MainLayout>
      {course?.id && <CourseEditor course={course}/>}
      {/*{course?.id && <EditorRenderer data={JSON.parse(course.editorContent)}/>}*/}
    </MainLayout>
  )
};

const getState = (state) => ({course: state.courses.course});
export default connect(getState, null)(CreateCourse);
