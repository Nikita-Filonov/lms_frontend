import React from "react";
import {MainLayout} from "../../Components/Layouts/MainLayout";
import {connect} from 'react-redux';
import {Button} from "@mui/material";


const CreateCourse = ({course}) => {
  const getEditorPayload = async () => {
    // const payload = await Editor.save();
    // console.log(payload);
  }

  return (
    <MainLayout>
      <Button>asdsad</Button>

    </MainLayout>
  )
};

const getState = (state) => ({course: state.courses.course});
export default connect(getState, null)(CreateCourse);
