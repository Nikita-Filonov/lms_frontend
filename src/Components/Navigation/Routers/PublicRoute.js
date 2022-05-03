import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export const PublicRoute = (props) => {
  const token = localStorage.getItem('token');

  return token ? <Navigate to={{pathname: '/home', state: {from: props.location}}}/> : <Outlet/>;
};
