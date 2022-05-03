import React, {useEffect} from "react";
import {MainLayout} from "../../Components/Layouts/MainLayout";
import {useCourses} from "../../Providers/CoursesProvider";
import {CourseCard} from "../../Components/Items/Courses/CourseCard";
import {Grid} from "@mui/material";
import {CustomFab} from "../../Components/Common/Buttons/CustomFab";
import {Add} from "@mui/icons-material";


export const CoursesList = () => {
  const {courses, getCourses} = useCourses();

  useEffect(() => {
    (async () => await getCourses())()
  }, [getCourses]);


  return (
    <MainLayout>
      <Grid container spacing={2}>
        {courses.map(course => <CourseCard key={course.id} course={course}/>)}
      </Grid>
      <CustomFab icon={<Add/>}/>
    </MainLayout>
  )
}
