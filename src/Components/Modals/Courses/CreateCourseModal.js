import React from "react";
import {ModalWrapper} from "../../Common/Modals/ModalWrapper";
import {Button, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {connect} from 'react-redux';
import {setCourse, setCreateCourseModal} from "../../../Redux/Courses/coursesActions";
import {CustomInput} from "../../Common/Inputs/CustomInput";
import {useCourses} from "../../../Providers/CoursesProvider";
import {INITIAL_COURSES} from "../../../Redux/Courses/initialState";

const CreateCourseModal = ({createCourseModal, setCreateCourseModal, course, setCourse}) => {
  const {createCourse} = useCourses();

  const onClose = () => {
    setCourse(INITIAL_COURSES.course);
    setCreateCourseModal(false);
  }

  const onCreate = async () => {
    onClose();
    await createCourse(course);
  }

  return (
    <ModalWrapper modal={createCourseModal} onClose={onClose}>
      <DialogTitle>Создать курс</DialogTitle>
      <DialogContent>
        <CustomInput
          label={'Заголовок'}
          onChange={title => setCourse({...course, title})}
        />
        <CustomInput
          label={'Картинка'}
          onChange={image => setCourse({...course, image})}
        />
        <CustomInput
          label={'Описание'}
          multiline={true}
          rows={4}
          onChange={description => setCourse({...course, description})}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={onCreate}>Создать</Button>
      </DialogActions>
    </ModalWrapper>
  )
};

const getState = (state) => ({
  course: state.courses.course,
  createCourseModal: state.courses.createCourseModal
});
export default connect(getState, {setCourse, setCreateCourseModal})(CreateCourseModal);
