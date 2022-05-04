import React, {useEffect} from "react";
import {MainLayout} from "../../Components/Layouts/MainLayout";
import {connect} from 'react-redux';
import {Button} from "@mui/material";
import {CourseEditor} from "../../Components/Common/Editor/CourseEditor";
import {useParams} from 'react-router-dom';


const CreateCourse = ({course}) => {
  const {courseId} = useParams();

  useEffect(() => {
    console.log(courseId)
  }, [courseId]);

  return (
    <MainLayout>
      <Button>asdsad</Button>
      <CourseEditor course={course}/>
    </MainLayout>
  )
};

const getState = (state) => ({course: state.courses.course});
export default connect(getState, null)(CreateCourse);
