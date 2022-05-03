import React from "react";
import {ModalWrapper} from "../../Common/Modals/ModalWrapper";
import {Button, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {connect} from 'react-redux';
import {setCreateCourseModal} from "../../../Redux/Courses/coursesActions";

const CreateCourseModal = ({createCourseModal, setCreateCourseModal}) => {

  const onClose = () => setCreateCourseModal(false);

  return (
    <ModalWrapper modal={createCourseModal} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={onClose}>Создать</Button>
      </DialogActions>
    </ModalWrapper>
  )
};

const getState = (state) => ({createCourseModal: state.courses.createCourseModal});
export default connect(getState, {setCreateCourseModal})(CreateCourseModal);
