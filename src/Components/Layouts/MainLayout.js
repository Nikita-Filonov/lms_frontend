import React from "react";
import {Container} from "@mui/material";

export const MainLayout = ({children, sx}) => {
  return (
    <Container sx={{
      display: 'flex',
      minHeight: '91vh',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      ...sx,
    }}>
      {children}
    </Container>
  )
};
