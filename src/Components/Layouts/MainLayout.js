import React from "react";
import {Container} from "@mui/material";

export const MainLayout = ({children, sx}) => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      ...sx,
    }}>
      {children}
    </Container>
  )
};
