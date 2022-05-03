import React from "react";
import {MainLayout} from "./MainLayout";
import {Grid, Typography} from "@mui/material";
import {GoogleAuth} from "../Blocks/Login/GoogleAuth";

export const LoginLayout = ({children, withAuth = true}) => {

  return (
    <MainLayout>
      <Grid container justifyContent={'center'} display={'flex'} alignItems={'center'} flexDirection={'column'}>
        <Typography sx={{textAlign: 'center', mt: 4}} variant={'h6'}>RQ Calculator</Typography>
        <Grid item xs={12} md={4}>
          {children}
          {withAuth && <GoogleAuth/>}
        </Grid>
      </Grid>
    </MainLayout>
  )
};
