import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {CustomAppBar} from "../../Styles/Blocks";

export const NavigationNavbar = ({open, onDrawerOpen}) => {
  return (
    <CustomAppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={onDrawerOpen}
          edge="start"
          sx={{marginRight: 5, ...(open && {display: 'none'})}}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </CustomAppBar>
  )
}
