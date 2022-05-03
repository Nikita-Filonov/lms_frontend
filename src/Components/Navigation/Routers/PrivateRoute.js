import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export const PrivateRoute = (props) => {
  const token = localStorage.getItem('token');

  return token ? <Outlet/> : <Navigate to={{pathname: '/login', state: {from: props.location}}}/>
};
