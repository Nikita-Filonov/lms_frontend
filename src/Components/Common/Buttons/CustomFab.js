import React from "react";
import {useCustomTheme} from "../../../Providers/Theme/CustomThemeProvider";
import {CommonStyles} from "../../../Styles/Blocks";
import {Fab} from "@mui/material";

export const CustomFab = ({icon, onClick}) => {
  const {isDesktop} = useCustomTheme();

  return (
    <Fab color={'primary'} size={isDesktop ? 'large' : 'medium'} sx={CommonStyles.fab} onClick={onClick}>
      {icon}
    </Fab>
  )
}
