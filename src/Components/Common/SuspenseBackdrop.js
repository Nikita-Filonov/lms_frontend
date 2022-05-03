import React from "react";
import {Backdrop, CircularProgress} from "@mui/material";
import {connect} from "react-redux";

const SuspenseBackdrop = ({backdrop}) => <Backdrop
  sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
  open={backdrop}
>
  <CircularProgress color="inherit"/>
</Backdrop>

const getState = (state) => ({backdrop: state.users.backdrop});
export default connect(getState, null)(SuspenseBackdrop);
