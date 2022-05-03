import React from "react";
import {ModalWrapper} from "../../Common/Modals/ModalWrapper";
import {Button, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {connect} from 'react-redux';

const CreateCourse = ({createCourseModal, setCreateCourseModal}) => {

  const onClose = () => setCreateCourseModal(false);

  return (
    <ModalWrapper>
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

export default connect(null, null)(CreateCourse);
