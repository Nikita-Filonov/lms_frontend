import React from 'react';
import {Dialog, Slide} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalWrapper = ({children, modal = false, setModal, onClose = null, name, ...rest}) => {
  const onSafeClose = () => onClose ? onClose() : setModal(false);

  return (
    <Dialog
      fullWidth
      open={modal}
      onClose={onSafeClose}
      disableScrollLock={true}
      TransitionComponent={Transition}
      {...rest}
    >
      {children}
    </Dialog>
  );
}
